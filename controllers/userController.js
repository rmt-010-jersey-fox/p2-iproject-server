const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
    static login(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: {email: email}
        })
        .then(data => {
            if (!data) {
                res.status(401).json({ message: "Invalid Email / Password" })
            } else {
                const passwordMatch = comparePassword(password, data.password)
                if (!passwordMatch) {
                    res.status(401).json({ message: "Invalid Email / Password" })
                } else {
                    const token = generateToken({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({ id: data.id, email: data.email, access_token: token, firstName: data.firstName })
                }
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
    }

    static register(req, res) {
        const { email, password, firstName, lastName } = req.body
        User.create({
            email,
            password,
            firstName,
            lastName
        })
        .then(data => {
            const token = generateToken({
                id: data.id,
                email: data.email
            })
            res.status(201).json({ id: data.id, email: data.email, access_token: token, firstName: data.firstName })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
    }

    static profile(req, res) {
        User.findOne({
            where: {id: req.loggedUser.id},
            attributes: {exclude: ['password']}
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }
}

module.exports = UserController