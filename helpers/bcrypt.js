const bcrypt = require('bcryptjs')

function hashPassword(password) {
    return bcrypt.hashSync(password, 7)
}

function comparePassword(password_db, password_body) {
    return bcrypt.compareSync(password_db, password_body)
}

module.exports = {
    hashPassword,
    comparePassword
}