const jwt = require('jsonwebtoken')
const JWT_KEY = 'secretKey'

function sign(payload) {
    return jwt.sign(payload, JWT_KEY)
}

function verify(token) {
    return jwt.verify(token, JWT_KEY)
}

module.exports = { sign, verify }