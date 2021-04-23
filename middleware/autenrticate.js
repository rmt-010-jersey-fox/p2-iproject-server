const { cekToken } = require("../helpers/jsonToken")
const { User } = require("../models")

async function autenticate(req, res, next) {
    try {
        const { access_token } = req.headers
        if (access_token) {
            const decoded = cekToken(access_token)
            let data = await User.findOne({
                where: { email: decoded.email }
            })
            if (!data) {
                res.status(401).json({ msg: "Authentication Failed 1" })
            }
            else {
                req.loggedUser = decoded
                console.log(req.loggedUser);
                next()
            }

        } else {
            res.status(401).json({ msg: "Authentication Failed 2" })
        }
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ msg: "Authentication Failed 3" })
    }

}

module.exports = autenticate