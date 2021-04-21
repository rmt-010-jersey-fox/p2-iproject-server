const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({where: {email}})
            .then(data => {
                if (data) {
                    const isLoggedIn = comparePassword(password, data.password)
                    if (isLoggedIn) {
                        const token = generateToken({
                            id: data.id,
                            email: data.email
                        })
                        res.status(200).json({access_token: token, name: data.name})
                    } else {
                        next({name: 'Invalid Login'})
                    }
                } else {
                    next({name: 'Invalid Login'})
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static register (req, res, next) {
        const { email, password, name } = req.body
        User.create({email, password, name})
            .then(data => {
                res.status(201).json({ id: data.id, name: data.name})
            })
            .catch(err => {
                if (err.errors[0].message === 'email must be unique') {
                    next({name: 'bad request', message: 'email already exists'})
                } else {
                    next(err)
                }
            })
    }
}

module.exports = UserController