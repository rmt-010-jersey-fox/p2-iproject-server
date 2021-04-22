const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models/index')

const Authentication = (req, res, next) => {
    const {access_token} = req.headers

    if(access_token) {
        const decoded = verifyToken(access_token)
        User.findOne({
            where: {
                email: decoded.email
            }
        })
        .then(user => {
            if(user) {
                req.loggedInUser = {
                    id: decoded.id,
                    email: decoded.email
                }
                next()
            } else {
                req.status(401).json({
                    msg: 'Unauthorize'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
    } else {
        res.status(401).json({
            msg: 'Unauthorize you have to login first'
        })
    }
} 

module.exports = Authentication