const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt');


function authentication(req, res, next) {
    const access_token = req.headers.access_token
    if (access_token) {
        const loginUser = verifyToken(access_token)
        User.findOne({
            where: {
                email: loginUser.email
            }
        })
            .then(user => {
                if (user) {
                    req.isLoggedIn = {
                        id: user.id,
                        email: user.email
                    }
                    next()
                } else {
                    res.status(404)
                }
            })
    } else {
        res.status(404)
    }
}

module.exports = authentication