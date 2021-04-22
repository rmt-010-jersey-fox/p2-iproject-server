const {User} = require('../models');
const {verifyJwt} = require('../helpers/jwt');

function authenticate(req, res, next) {
    const token = req.headers.access_token
    // console.log(token)
    if (token) {
        const decoded = verifyJwt(token)
        // console.log(decoded)
        User.findOne({
            where: {
                email: decoded.email
            }
        })
        .then((currentUser) => {
            if (currentUser) {
                req.loggedUser = {
                     id: currentUser.id,
                     email: currentUser.email,
                     name: currentUser.name
                }
                next()
            } else {
                next({ message: "invalid access token" })
            }
        })
    } else {
        next({message: "dont have access token please login first" })
    }
}

module.exports = authenticate