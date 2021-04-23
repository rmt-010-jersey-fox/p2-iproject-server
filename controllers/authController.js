const { User } = require('../models')
const { verify } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class AuthController {

    static login(req, res, next) {
        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(data => {
                let error = { code: 400, msg: 'wrong email or password' }
                if (data) {
                    try {
                        if (verify(req.body.password, data.password)) {
                            data = {
                                name: data.name,
                                email: data.email,
                                id: data.id,
                                level: data.level
                            }
                            data.token = sign(data)
                            res.status(200).json(data)
                        } else {
                            next(error)
                        }
                    } catch (err) {
                        next(error)
                    }
                } else {
                    next(error)
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static register(req, res, next) {
        console.log(req.body)
        User.create({
                email: req.body.email,
                password: req.body.password,
                level: 1
            })
            .then(data => {
                let returnData = {
                    id: data.id,
                    email: data.email,
                    level: data.level
                }
                res.status(201).json(returnData)
            })
            .catch(err => {
                next(err)
            })
    }
}


module.exports = AuthController;