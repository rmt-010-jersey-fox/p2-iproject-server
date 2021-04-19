const bcrypt = require('bcrypt')

const hashPasword = function (password) {
	return bcrypt.hashSync(password, 8)
}
const verifyPasword = function (password, passDb) {
	return bcrypt.compareSync(password, passDb)
}

module.exports = {
	hashPasword,
	verifyPasword,
}
