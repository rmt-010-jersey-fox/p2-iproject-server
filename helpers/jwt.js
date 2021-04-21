const jwt = require('jsonwebtoken')
const SECRET = 'bluemoon'

function generateToken(payload) {
  const token = jwt.sign(payload, SECRET)
  return token
}

function verifyToken(token) {
  const verify = jwt.verify(token, SECRET)
  return verify
}

module.exports = {
  generateToken,
  verifyToken
}