const bcrypt = require('bcrypt')

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const confirmPassword = (pass, encryptedPass) => {
    return bcrypt.compareSync(pass, encryptedPass)
}

module.exports = {
    hashPassword,
    confirmPassword
}