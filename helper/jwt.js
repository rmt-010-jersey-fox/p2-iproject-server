const jwt = require ('jsonwebtoken')
// const JWT_SECRET = proccess.env.JWT_SECRET
JWT_SECRET = "secretindiv"

function generateToken(payload){
    return jwt.sign(payload, JWT_SECRET)
}

function verify(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    generateToken,
    verify
}