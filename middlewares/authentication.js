const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

function authentication(req, res, next){
    const {token} = req.headers
    if(token){
        const payload = verifyToken(token)
        User.findOne({
            where: {
                email: payload.email
            }
        })
            .then(user => {
                if(user){
                    req.currentUser = payload
                    next()
                } else {
                    next({name: 'wrong email password'})
                }
            })
            .catch(err => {
                next(err.message)
            })
    } else {
        next({name: 'wrong email password'})
    }
}

module.exports = authentication