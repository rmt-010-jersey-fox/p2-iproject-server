const jwt = require('jsonwebtoken')
const { User } = require('../models')

const authentication = async function (req, res, next) {
	const token = req.headers.access_token
	if (!token) {
		next({
			message: 'invalid token',
			name: 'Unauthorized',
		})
	} else {
		const decoded = jwt.verify(token, process.env.SECRET)
		console.log(decoded)
		let user = await User.findByPk(decoded.id)
		if (!user) {
			next({
				message: 'invalid token',
				name: 'Unauthorized',
			})
		} else {
			req.userAuth = decoded
			next()
		}
	}
}

const authorizationCat = async function (req, res, next) {
	const { id, email } = req.userAuth
	const catId = req.params.id
	let cat = await Cat.findByPk(catId)
	if (!cat) {
		next({
			name: 'Not Found',
			message: 'error not found',
		})
	} else if (cat.UserId !== id) {
		next({
			message:
				'Authorization error, you are not allowed to do this to other user cat ',
			name: 'Unauthorized',
		})
	} else {
		next()
	}
}

module.exports = {
	authentication,
	authorizationCat,
}
