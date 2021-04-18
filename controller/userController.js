const { hash, compare } = require('../helper/bcypt')
const { generateToken, verifyToken } = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library');
const { BookUser, Book, User } = require('../models')

class userController {
    static register(req, res, next) {
        let { email, password } = req.body;
        User.create({ email: email, password: password })
            .then(data => {
                let user = {
                    id: data.id,
                    email: data.email
                }
                res.status(200).json(user)
            })
            .catch(next)
    }
    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({ where: { email: email } })
            .then(data => {
                if (data && compare(password, data.password)) {
                    let loggedUser = {
                        id: data.id,
                        email: data.email
                    }
                    let token = generateToken(loggedUser)
                    res.status(200).json({ token })
                }
                else {
                    next({ status: 401, message: 'invalid password or email' })
                }
            })
            .catch(next)
    }
    static googleLogin(req, res, next) {
        let { id_token } = req.body
        let email = ""
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID,
        })
            .then(ticket => {
                const payload = ticket.getPayload()
                email = payload.email
                return User.findOne({ where: { email } })
            })
            .then(user => {
                if (user) {
                    return user
                }
                else {
                    return User.create({
                        email: email,
                        password: Math.random() * 1000000 + 'passwordGoogle'
                    })
                }
            })
            .then(user => {
                let token = generateToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({ token })
            })
            .catch(next)
    }
}

module.exports = userController