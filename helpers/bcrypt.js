const bcrypt = require("bcrypt")

function hashPassword(plainPassword) {
    return bcrypt.hashSync(plainPassword, 8)
}

function comparePassword(plainPassword, encyptedPassword) {
    return bcrypt.compareSync(plainPassword, encyptedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}