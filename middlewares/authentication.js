const {verifyToken} = require('../helpers/jwt')
const {Customer} = require('../models')

function authentication(req, res, next) {
    const {access_token} = req.headers
    if(access_token) {
        const verify = verifyToken(access_token)
        Customer.findOne({where: {email: verify.email}})
        .then(user => {
            req.currentUser = {id: user.id, email:user.email}
            next()
        })
        .catch(err => {
            next({name: 'Invalid Token'})
        })
    } else {
        next({name: 'Please login first'})
    }
}

module.exports = authentication;