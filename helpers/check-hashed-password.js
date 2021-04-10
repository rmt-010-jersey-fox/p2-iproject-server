const bcrypt = require("bcrypt")

function checkHashedPassword(input, hashed) {
  return bcrypt.compareSync(input, hashed)
}

module.exports = checkHashedPassword