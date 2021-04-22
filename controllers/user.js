const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')

class UserController {
    static register (req, res, next) {
        const {email, username, password} = req.body
        User.create({
            email,
            username,
            password
        })
            .then((data) => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                    username: data.username
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static login (req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then((data) => {
                if (data) {
                    const valid = comparePassword(password, data.password)
                    if (valid) {
                        const token = signToken({
                            id: data.id,
                            email: data.email,
                            username: data.username
                        }, process.env.SECRETKEY)
                        res.status(200).json({
                            token: token
                        })
                    } else {
                        next({
                            status: 403,
                            message: 'invalid e-mail / password'
                        })
                    }
                } else {
                    next({
                        status: 403,
                        message: 'invalid e-mail / password'
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = UserController