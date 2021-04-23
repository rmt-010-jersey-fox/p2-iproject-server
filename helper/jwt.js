var jwt = require('jsonwebtoken');
let password = process.env.JWT_PASSWORD

function generateToken(payLoad) {
    return jwt.sign(payLoad, password);
}

function verifyToken(token) {
    return jwt.verify(token, password);
}

module.exports = { generateToken, verifyToken }