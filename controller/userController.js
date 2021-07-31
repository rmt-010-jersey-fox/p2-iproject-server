const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

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

    static googleLogin (req, res, next) {
        const id_token = req.body.id_token
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email;
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        }).then(ticket => {
            const payload = ticket.getPayload()
            email = payload.email
            return User.findOne({where: {email: email}})
        }).then(user => {
            if (user) {
                return user
            } else {
                let name = email.split('@')
                return User.create({
                    email: email,
                    password: `${Math.random() * 10000}4tTh5ho5u4bk`,
                    name: name[0]
                })
            }
        }).then(user => {
            const token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(200).json({access_token: token, name: user.name})
        }).catch(err => {
            console.log(err);
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