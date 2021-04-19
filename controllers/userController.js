const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body
        User.create({
            email, 
            password
        })
            .then(user => {
                res.status(201).json({
                    id: user.id,
                    email: user.email
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if(!user) {
                    res.status(400).json({
                        msg: 'Invalid Email / Password'
                    })
                } else {
                    const isPasswordMatch = comparePassword(password, user.password)
                    if(!isPasswordMatch) {
                        res.status(400).json({
                            msg: 'Invalid Email / Password'
                        })
                    } else {
                        const access_token = generateToken({
                            id: user.id,
                            email: user.email
                        })
                        res.status(200).json({
                            id: user.id,
                            email: user.email,
                            access_token
                        })
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static loginGoogle(req, res, next) {
        const { google_access_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = ''
        client.verifyIdToken({
            idToken: google_access_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
                console.log(ticket);
                let payload = ticket.getPayload()
                email = payload.email
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then(user => {
                if(user) {
                    return user
                } else {
                    let userObj = {
                        email,
                        password: process.env.GOOGLE_SECRET
                    }
                    return User.create(userObj)
                }
            })
            .then(dataUser => {
                let access_token = generateToken({
                    id: dataUser.id,
                    email: dataUser.email
                })
                return res.status(200).json({
                    access_token
                })
            })
            .catch(err => {
                console.log(err);
                next(err)
            })
    }
}

module.exports = { UserController }