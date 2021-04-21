const bcrypt = require('bcryptjs');

function hashPasword(plainPassword) {
    return bcrypt.hashSync(plainPassword, 8)
}

function comparePassword(plainPassword, hashsedPassword) {
    return bcrypt.hashSync(plainPassword, hashsedPassword)
}

module.exports = {
    hashPasword,
    comparePassword
}