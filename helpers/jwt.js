const secretGenerate = process.env.SECRET_TOKEN
const jwt = require('jsonwebtoken');

function generateToken(loginUser) {
    return jwt.sign(loginUser, secretGenerate)
}

function verifyToken(token) {
    return jwt.verify(token, secretGenerate)
}

module.exports = { generateToken, verifyToken }