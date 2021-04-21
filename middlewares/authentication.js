const jwt = require('../helper/jwt')
const { User } = require('../models')
async function authenticate(req, res, next) {
    try {
        const { token } = req.headers;
        if (token) {
            const payload = jwt.verify(token);
            const findUser = await User.findOne({
                where : {
                    email : payload.email
                }
            })
            if(findUser) {
                req.loggedUser = {
                    email : payload.email,
                    id : payload.id
                }
                next()
            } else {
                throw {
                    name : "invalid JWT"
                }
            }
        } else {
            throw {
                name : "invalid JWT"
            }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authenticate;