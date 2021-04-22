const bcrypt = require('bcrypt');
const salt = +process.env.BCRYPT_SALT

function hashingPassword(inputedPassword) {
    return bcrypt.hashSync(inputedPassword, salt)
}

function verifyPassword(inputed, hashed) {
    return bcrypt.compareSync(inputed, hashed)
}

module.exports = { hashingPassword, verifyPassword }