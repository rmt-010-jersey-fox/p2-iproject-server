const { hashingPassword, verifyPassword } = require('../helpers/bcrypt');
const { generateToken, verifyToken } = require('../helpers/jwt');
const sendEmail = require('../helpers/nodemailer');
const { User } = require('../models');

class Controller {

    static login(req, res, next) {
        let userLogin
        User.findOne({
            where: {
                email: req.body.loginUser.email
            }
        })
            .then(user => {
                if (user) {
                    userLogin = user.dataValues
                    return verifyPassword(req.body.loginUser.password, user.password)
                }
            })
            .then(result => {
                if (result) {
                    let access_token = generateToken({
                        id: userLogin.id,
                        email: userLogin.email
                    })
                    res.status(200).json({
                        id: userLogin.id,
                        email: userLogin.email,
                        access_token
                    })
                } else {
                    res.send(404).json({ message: 'invalid email / password' })
                }
            })
            .catch(err => {
                res.send(404).json({ message: 'invalid email / password' })
            })
    }

    static register(req, res, next) {
        let registerUser = {
            name: req.body.newUser.name,
            email: req.body.newUser.email,
            password: req.body.newUser.password,
            role: 'customer'
        }

        User.create(registerUser)
            .then(user => {
                sendEmail(user.email, "iO-Movie", `Thanks for your participation for using iO-Movie.\nYou have been registrated in iO-Movie Apps`)
                res.status(201).json({ message: `success create ${user.email}` })
            })
            .catch(err => {
                next({
                    name: 'FailCreate'
                })
            })
    }
}

module.exports = Controller