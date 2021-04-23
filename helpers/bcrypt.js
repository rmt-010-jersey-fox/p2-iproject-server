const bcrypt = require('bcrypt')

function hashPassword(password) {
  const hash = bcrypt.hashSync(password, 8)
  return hash
}

function comparePassword(password, hash) {
  const compare = bcrypt.compareSync(password, hash)
  return compare
}

module.exports = {
  hashPassword,
  comparePassword
}