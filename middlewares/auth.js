const {verify} = require('../helpers/jwt')
const {User} = require('../models')

async function authentication(req, res, next) {

    try {
        const {access_token} = req.headers;
        // console.log(access_token, "<<access_token")

        if (access_token) {
            const decoded = verify(access_token);

            const user = await User.findOne({
                where: {
                    email: decoded.email,
                }
            })

            if (user) {
                req.loggedUser = {
                    id: user.id,
                    email: user.email
                };
                // console.log("masuk authentication");
                next();
            } else {
                // ada access token tapi ga sesuai sama yang login.
                throw ({name: "jwt malformed"})
            }
        } 
        else {
            // access token null
            throw ({name: "jwt must be provided"})
        }
    } catch (err) {
        console.log(err, "error auth")
        next(err);
    }
}

async function authorization (req, res, next) {
    const {id, email} = req.loggedUser

    User.findOne(
        {
            where: {
                id,
                email
            }
    })
    .then(user => {
        // console.log(user.email)
        // console.log(email)
        if(!user) {
            next({status: 401, message: "Unauthorized"})
        }
        else {
            if(user.email == email) {
                next()
            }
            else {
                next({status: 401, message: "Unauthorized"})
            }
        }
    })
    .catch(err=> {
        res.status(500).json({message: err.message})
    })
}

module.exports = {
    authentication,
    authorization
}