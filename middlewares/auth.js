const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt');

function authenticate(req, res, next) {
    const {access_token} = req.headers

    if(access_token) {
        const decoded = verifyToken(access_token)
        User.findOne({
            where: {email: decoded.email}
        })
        .then(data => {
            if(data) {
                req.loggedUser = {
                    id: decoded.id,
                    email: decoded.email
                }
                next()
            } else {
                res.status(401).json({message: 'Invalid Token'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Internal Server Error'})
        })
    } else {
        res.status(401).json({message: 'Please Login First!'})
    }
}

module.exports = authenticate