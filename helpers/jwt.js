const jwt = require('jsonwebtoken');
const SECRET_JWT = 'rahasia'

function signJwt(payload) {
    return jwt.sign(payload, SECRET_JWT)
}

function verifyJwt(token) {
    return jwt.verify(token, SECRET_JWT)
}

module.exports = {
    signJwt,
    verifyJwt
}