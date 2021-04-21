const bcrypt = require('bcrypt')

function hashPassword(planPassword) {
    return bcrypt.hashSync(planPassword, 10)
}

function comparePassword(planPassword, encryptedPassword) {
    return bcrypt.compareSync(planPassword, encryptedPassword)
}

module.exports = { hashPassword, comparePassword }