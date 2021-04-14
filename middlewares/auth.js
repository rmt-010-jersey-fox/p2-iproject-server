const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authenticate = (req,res, next) => {
    const verify = verifyToken(req.headers.access_token)
    if (!req.headers.access_token) {
        res.status(401).json({ message: "Unathororize !, Please Login First"})
    } else {
        User.findOne({
            where: {id: verify.id, email: verify.email}
        })
        .then(user => {
            if (!user) {
                res.status(401).json({ message: "Invalid access token"})    
            } else {
                req.currentUser = { id: user.id, name: user.name, email: user.mail}
                next()
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error"})
        })
    }
}

module.exports = {
    authenticate
}