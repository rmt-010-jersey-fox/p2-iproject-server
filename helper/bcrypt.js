const bcrypt = require('bcrypt')

function hashPsw(plainPsw) {
    return bcrypt.hashSync(plainPsw, 8)
}

function comparePsw(plainPsw, hashedPsw) {
    return bcrypt.compareSync(plainPsw, hashedPsw)
}

module.exports = {
    hashPsw,
    comparePsw
}