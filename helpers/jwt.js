const jwt = require('jsonwebtoken')
let secret = process.env.JWT_SECRET

function tokenGenerate(payload) {
    return jwt.sign(payload, secret)
}

function verifyToken(token) {
    return jwt.verify(token, secret)
}

module.exports = {tokenGenerate, verifyToken}