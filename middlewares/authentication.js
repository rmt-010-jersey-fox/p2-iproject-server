const { User } = require('../models')
const { verify } = require('../helpers/jwt')

async function authentication(req, res, next) {
    try {
        let { access_token } = req.headers
        if(access_token) {
            let decoded = verify(access_token)
            let data = await User.findOne({
                email: decoded.email
            })
            if(data) {
                req.nowLogged = {
                    id: decoded.id,
                    email: decoded.email
                }
                next()
            }else {
                res.status(401).json({message: 'cant login, wrong token'})
            }
        }else {
            res.status(401).json({message: 'need acces token for login'})
        }
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

module.exports = authentication