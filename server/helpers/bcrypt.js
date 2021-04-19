const bcrypt = require('bcrypt')

const hashPasword = function (password) {
	return bcrypt.hashSync(password, 8)
}
const verifyPassword = function (password, passDb) {
	return bcrypt.compareSync(password, passDb)
}

module.exports = {
	hashPasword,
	verifyPassword,
}
