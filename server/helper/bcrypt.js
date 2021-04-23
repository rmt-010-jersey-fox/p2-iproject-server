const bcrypt = require('bcrypt')
const salt = 10

function hashPassword(myPlaintextPassword){
    return bcrypt.hashSync(myPlaintextPassword, salt)
}

function comparePassword(myPlaintextPassword, hash){
    return bcrypt.compareSync(myPlaintextPassword, hash)
}

module.exports = {
    hashPassword,
    comparePassword
}