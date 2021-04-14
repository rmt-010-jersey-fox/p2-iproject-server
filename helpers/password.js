const bcrypt = require('bcrypt');

const hashPassword = (payload) => {
    return bcrypt.hashSync(payload, process.env.SECRET_KEY)
}


const comparePassword = (decoded) => {
    return bcrypt.hashSync(decoded, process.env.SECRET_KEY)
}

module.exports = {
    hashPassword,
    comparePassword
}