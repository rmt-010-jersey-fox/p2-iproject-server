const { User } = require("../models");
const { generateToken } = require("../helpers/token.js");
const bcrypt = require("bcrypt");
const transporter = require("../helpers/nodemailer")

class UserController {

    static register(req, res, next) {
       let {email, password, username} = req.body;

       User.create({
           username,
           email,
           password
       })
       .then(user => {
            const options = {
                from: "rezanasu@outlook.com",
                to: email,
                subject: "REGISTRATION GREETING",
                text: "Welcome to pixelates, enjoy sharing and discovering photos"
            }

            transporter.sendMail(options, function (err, info) {
                if(err) {
                    throw new Error()
                }
                console.log(`Sent: ${info.response}`)
            })

            res.status(201).json({
                email,
                username
            });
       })
       .catch(err => {
           if(err.name === "SequelizeValidationError") {
                next({name: "ValidationError", currentError: err});
           } else if(err.name === "SequelizeUniqueConstraintError") {
                next({name: "UniqueConstraintError", currentError: err});
           } else {
                next(err);
           }
       })
    }

    static login(req, res, next) {
        let {email, password} = req.body;
        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if(user) {
                const comparePassword = bcrypt.compareSync(password, user.password);

                if(comparePassword) {
                    const access_token = generateToken({
                        username: user.username,
                        email: user.email
                    })
                    res.status(200).json({
                        username: user.username,
                        email: user.email,
                        access_token
                    });
                } else {
                    next({name: "WrongInput"});
                }
            } else {
                next({name: "UserNotFound"});
            }
        })
        .catch(err => {
            if(err.name === "SequelizeValidationError") {
                next({name: "ValidationError", currentError: err});
           } else if(err.name === "SequelizeUniqueConstraintError") {
                next({name: "UniqueConstraintError", currentError: err});
           } else {
                next(err);
           }
        })
    }
}

module.exports = UserController;