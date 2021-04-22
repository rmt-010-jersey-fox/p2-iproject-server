const {User} = require('../models');
const {comparePassword} = require('../helpers/bcrypt');
const {signJwt} = require('../helpers/jwt');

class UserController {
    static register(req, res, next) {
        const {email, password, name} = req.body
        User.create({
            email,
            password,
            name
        })
        .then((newUser) => {
            res.status(201).json({id: newUser.id, email: newUser.email})
        })
        .catch((err) => {
            next({name: "500", message: err.message})
        })
    }

    static googleLogin(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email
        let name
        let avatar
        client.verifyIdToken({
            idToken: req.body.googleToken,
            audience: process.env.CLIENT_ID
        })
        .then((ticket) => {
            const payload = ticket.getPayload()
            email = payload.email
            name = payload.name
            avatar = payload.picture
            return User.findOne({
                where: {
                    email,
                }
            })

        })
        .then((user) => {
            if (user) {
                const access_token = signJwt({
                    id: user.id,
                    name: user.name,
                    email: user.email
                })
                res.status(200).json({access_token, name, avatar})
            } else {
                return User.create({
                    email,
                    name,
                    avatar,
                    password: Math.random() * 1000 + "abcxyzs" 
                })
            }
        })
        .then((googleRegisteredUser) => {
            const token = sign({
                id: googleRegisteredUser.id,
                name: googleRegisteredUser.name,
                email: googleRegisteredUser.email
            })
            res.status(201).json({token, name: googleRegisteredUser.name, avatar})
        })
        .catch((err) => {
            next({message: err.message})
        })
    }

    static login(req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then((foundUser) => {
            if (foundUser) {
                const matchPassword = comparePassword(password, foundUser.password)
                if (matchPassword) {
                    const access_token = signJwt({id: foundUser.id, email: foundUser.email})
                    res.status(200).json({access_token, username: foundUser.name})
                } else {
                    next({name: "404", message: "invalid username/password"})
                }
            } else {
                next({name: "404", message: "invalid username/password"})
            }
        })
        .catch((err) => {
            next({message:err.message})
        })
    }
}

module.exports = UserController