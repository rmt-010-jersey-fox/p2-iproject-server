const { verify } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
    try {
        const {token} = req.headers
        if (token) {
            const decodedUser = verify(token)
            let user = await User.findOne({
                where: {
                    email: decodedUser.email
                }
            })
            if (user) {
                req.currentUser = {
                    id: decodedUser.id,
                    email: decodedUser.email
                }
                next()
            } else {
                throw {
                    status: 404,
                    message: "Not Found"
                }
            }
        } else {
            throw {
                status: 401,
                message: "Please Login First"
            }
        }
    } catch (err) {
        const status = err.status || 500
        const message = err.message || "Internal Server Error"
        res.status(status).json({ message})
    }
}

module.exports = authentication