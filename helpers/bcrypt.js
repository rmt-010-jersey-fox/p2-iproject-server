const bcrypt = require('bcrypt')

function hashPassword(plainPassword){
    return bcrypt.hashSync(plainPassword, 8)
}

function comparePassword(plainPassword, encryptedPassword){
    return bcrypt.compareSync(plainPassword, encryptedPassword)
}

module.exports = {hashPassword, comparePassword}