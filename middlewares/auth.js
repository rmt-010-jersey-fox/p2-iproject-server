const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

async function authenticate (req, res, next) {
    try {
        const user = verifyToken(req.headers.token, process.env.SECRETKEY)
        const data = await User.findOne({
            where: {
                id: user.id,
                email: user.email,
                username: user.username
            }
        })
        if (data) {
            req.currentUser = {
                id: data.id,
                email: data.email,
                username: data.username
            }
            next()
        } else {
            throw new Error ()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authenticate