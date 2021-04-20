const jwt = require("jsonwebtoken");

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRETPASSWORD);
}

function verify(token) {
  return jwt.verify(token, process.env.SECRETPASSWORD);
}

module.exports = { generateToken, verify };
