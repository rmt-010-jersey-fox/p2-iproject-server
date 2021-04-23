const jwt = require('jsonwebtoken')

let SECRET = process.env.SECRET

const generateToken = (payload) => jwt.sign(payload, SECRET)
const verifyToken = (token) => jwt.verify(token, SECRET)

module.exports = { generateToken, verifyToken }