const { verify } = require('../helpers/jwt')
const { User, Thread } = require('../models')

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
        const id = req.params.id
        const foundThread = await Thread.findByPk(id)
        if(foundThread){
            if(foundThread.UserId === req.loggedUser.id){
                next()
            } else {
                throw { status: 401, message: 'Unauthorized' }
            }
        } else {
            throw { status: 404, message: 'Not Found' }
        }
    } catch (err) {
        
    }
}

module.exports = { authenticate, authorization }