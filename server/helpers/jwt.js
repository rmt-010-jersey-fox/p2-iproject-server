const jwt = require('jsonwebtoken')

const signToken = function (payload) {
	return jwt.sign(payload, process.env.SECRET)
}

const verifyToken = function (payload) {
	return jwt.verify(payload, process.env.SECRET)
}

module.exports = {
	signToken,
	verifyToken,
}
