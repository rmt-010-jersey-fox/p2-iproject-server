const bcrypt = require('bcrypt')

function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(plainPassword, salt)
}
function comparePassword(plainPass, hashed) {
  return bcrypt.compareSync(plainPass, hashed)
}


module.exports = { hashPassword, comparePassword }