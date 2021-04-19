const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UsersController {
    static signup(req, res, next) {
        const { username, email, password } = req.body
        User.create({
            username,
            email,
            password
        })
        .then(user => {
            res.status(201).json({id: user.id, email: user.email})
        })
        .catch(err => {
            next(err)
        })
    }

    static signin(req, res, next) {
        const { email, password } = req.body
        User.findOne({ where: { email }})
            .then(response => {
                if (response) {
                    const isPasswordMatch = comparePassword(password, response.password)
                    if (isPasswordMatch) {
                        const token = sign({
                            id: response.id,
                            email: response.email
                        })
                        res.status(200).json({ access_token: token })
                    } else {
                        next({ name: 'ErrorPassword'})
                    }
                } else {
                    next({ name: 'EmailNotFound'})
                }
            })
            .catch(error => {
                next(error)
            })
    }
}

module.exports = UsersController