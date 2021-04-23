const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt')

class UserController {
    static login(req, res, next) {
        const {email, password} = req.body
        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            console.log(user, "<< user")
            if (!user) {
                next({name: 'Invalid email/password'})
                // res.status(401).json({message: 'invalid email/password'})
            }
            else {
                const isPasswordMatch = comparePassword(password, user.password)
                console.log(isPasswordMatch, "matches")
                if (!isPasswordMatch) {
                    next({name: 'Invalid email/password'})
                    // res.status(401).json({message: 'invalid email/password'})
                }
                else {
                    const token = sign({
                        id: user.id,
                        email: user.email
                    })
                    res.status(201).json({id: user.id, email: user.email, access_token: token})
                }
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: err.message})
        })
    }

    static register(req, res, next) {
        const {email, password, username} = req.body
        console.log(req.body)
        User.create({
            email,
            password,
            username
        })
        .then(user => {
            if (!user) {
                next(err)
            }
            else {
                res.status(201).json({id: user.id, email: user.email, username: user.username})
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController