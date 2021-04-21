const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, 'password');
}

function verify(token) {
  return jwt.verify(token, 'password');
}

module.exports = { generateToken, verify };
