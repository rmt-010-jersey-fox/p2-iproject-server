const bcrypt = require ('bcrypt')

function encrypt (plainPassword){
    return bcrypt.hashSync(plainPassword, 8)
}

function decrypt (plainPassword, hashedPassword){
    return bcrypt.compareSync(plainPassword,hashedPassword)
}

module.exports = {encrypt, decrypt}