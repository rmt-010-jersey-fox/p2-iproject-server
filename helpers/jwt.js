const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secret'

function sign (payload) {
    return jwt.sign(payload, JWT_SECRET)
}

function verify(access_token) {
    return jwt.verify(access_token,  JWT_SECRET)
}

module.exports = {
    sign,
    verify
}