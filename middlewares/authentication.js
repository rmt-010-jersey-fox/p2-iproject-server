const { verify } = require('../helpers/jwt')
const { User } = require('../models')

async function authenticate(req, res, next) {
    try {
        const { access_token } = req.headers;
        if (access_token) {
            const decoded = verify(access_token);
            const foundUser = await User.findOne({
                where: {
                    email: decoded.email
                }
            })
            if (foundUser) {
                req.currentUser = decoded
                next()
            } else {
                next({ name: 'EmailNotFound'})
            }
        } else {
            next({ name: 'PleaseLoginFirst'})
        }
    } catch(error) {
        if (error.name === 'JsonWebTokenError') {
            if (error.message === 'jwt malformed' || error.message === 'invalid signature') {
                next({ name: 'JWTMalformed'})
            }
        } else {
            console.log(error, '########################## Error middlewares')
            next(error)
        }
    }
}

module.exports = { authenticate }