const { verify } = require('../helpers/jwt')
const { User } = require('../models')

async function authenticate(req, res, next){
    try {
        const { access_token } = req.headers
        if(access_token){
            const decoded = verify(access_token)
            const user = await User.findOne({
                where: {email: decoded.email}
            })

            if(user){
                req.loggedUser = {
                    id: decoded.id,
                    email: decoded.email,
                    username: decoded.username
                }
                next()
            } else {
                throw { status: 401, message: 'Invalid access token'}
            }
        } else {
            throw { status: 401, message: 'Please login first'}
        }
    } catch (err) {
        next(err)
    }
}

async function authorization(req, res, next){
    try {
        
    } catch (err) {
        
    }
}

module.exports = { authenticate, authorization }