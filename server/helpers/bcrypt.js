const bcrypt = require('bcrypt')

const hashPassword = function (password) {
	return bcrypt.hashSync(password, 8)
}
const verifyPassword = function (password, passDb) {
	return bcrypt.compareSync(password, passDb)
}

module.exports = {
	hashPassword,
	verifyPassword,
}
