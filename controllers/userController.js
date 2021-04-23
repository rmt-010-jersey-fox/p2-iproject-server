 const { User } = require('../models')
 const { comparePassword } = require('../helpers/bcrypt')
 const { generateToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        try {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            let user = await User.create(newUser)
            res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            let user = await User.findOne({
                where: {email}
            })
            if (!user) {

                throw {
                    name: "BadRequest",
                    status: 400,
                    message: "Invalid Email / Password"
                }
            } else {
                const passFound = comparePassword(password, user.password)
                if (!passFound) {
                    throw {
                        name: "BadRequest",
                        status: 400,
                        message: "Invalid Email / Password"
                    }
                } else {
                    const token = generateToken({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    })
                    res.status(200).json({token})
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController