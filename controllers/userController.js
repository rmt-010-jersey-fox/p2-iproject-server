const { Pet, User } = require("../models")
const { bcryptPass, cekPass } = require("../helpers/bcrypt")
const { tokenGenerate, cekToken } = require("../helpers/jsonToken")

class UserController {
    static register(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email
                })
            })
            .catch(err => [
                res.status(400).json(err)
            ])
    }

    static login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(data => {
                if (data) {
                    let password = cekPass(req.body.password, data.password)
                    if (password == true) {
                        let user = { email: data.email, id: data.id }
                        let access_token = tokenGenerate(user)
                        // console.log(token);
                        res.status(200).json({ id: data.id, email: data.email, access_token: access_token })

                    } else {
                        res.status(401).json({ msg: "Email / password Invalid " })
                    }
                } else {
                    res.status(401).json({ msg: "Email / password Invalid " })
                }

            })
    }
}

module.exports = UserController