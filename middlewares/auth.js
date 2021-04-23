const { User, Anime } = require('../models')
const { verify } = require('../helpers/jwt')

const authentication = (req, res, next) => {
    try {
        if (req.headers.access_token) {
            let decryptedData = verify(req.headers.access_token)
            User.findOne({ where: { email: decryptedData.email } })
                .then(data => {
                    req.userData = data
                    next()
                })
                .catch(err => {
                    console.log(err)
                    next({ name: 'Error401' })
                })

        } else {

            next({
                name: 'Error403'
            })
        }
    } catch (error) {
        console.log(error)
        next({
            name: 'JsonWebTokenError'
        })
    }
}




module.exports = {
    authentication
}