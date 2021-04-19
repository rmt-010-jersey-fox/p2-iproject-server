const errorHandler = require('../middlewares/error-handler')
const { User } = require('../models')
const { verifyPassword } = require('../helpers/bcrypt')
const { verifyToken, signToken } = require('../helpers/jwt')
class UserController {
	static async register(req, res, next) {
		const { username, email, password } = req.body

		try {
			let user = await User.create({
				username,
				email,
				password,
			})
			res.status(201).json({
				message: 'Successfully register user',
				username: user.username,
				email: user.email,
				id: user.id,
			})
		} catch (error) {
			next(error)
		}
	}
	static async login(req, res, next) {
		const { email, password } = req.body
		try {
			let user = await User.findOne({
				where: {
					email: email,
				},
			})
			if (!user) {
				next({
					name: 'Bad Request',
					message: 'invalid Email/Password',
				})
			} else {
				if (!verifyPassword(password, user.password)) {
					next({
						name: 'Bad Request',
						message: 'invalid Email/Password',
					})
				} else {
					let token = signToken({
						id: user.id,
						email: user.email,
						username: user.username,
					})
					res.status(200).json({
						access_token: token,
					})
				}
			}
		} catch (error) {
			next(error)
		}
	}
	static async googleLogin(req, res, next) {}
}

module.exports = UserController
