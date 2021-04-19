const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET

function sign(payload) {
    return jwt.sign(payload, secretKey)
}

function verify(access_token) {
    return jwt.verify(access_token, secretKey)
}

module.exports = { sign, verify}