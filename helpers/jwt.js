const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const sign = (data) => {
    return jwt.sign(data, JWT_SECRET)
}

const verifyToken = (data) => {
    return jwt.verify(data, process.env.JWT_SECRET)
}


module.exports = { sign, verifyToken }