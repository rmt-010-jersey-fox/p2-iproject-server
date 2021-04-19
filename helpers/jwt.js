const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

function generateToken (payload) {
  return jwt.sign(payload, JWT_SECRET);
}

function decodeToken (token) {
  return jwt.verify(token, JWT_SECRET)
}

module.exports = { generateToken, decodeToken }