const jwt = require('jsonwebtoken')
const JWTSECRET = process.env.JWTSECRET

function generateToken(payload) {
    return jwt.sign(payload, JWTSECRET)
}

function verifyToken(access_token) {
    return jwt.verify(access_token, JWTSECRET)
}

module.exports = { generateToken, verifyToken }