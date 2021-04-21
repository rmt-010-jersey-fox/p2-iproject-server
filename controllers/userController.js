const { User } = require('../models')
const jwt = require('../helpers/jwt')
const bcrypt = require('../helpers/bcrypt')


class UserController {
    static register(req, res, next){
        let {name, email, password} = req.body
        User.create({name, email, password})
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next){
        console.log('login');
        let {email, password} = req.body
        User.findOne({where: {email}})
            .then(user => {
                if(!user){
                    next({name: 'invalid email or password'})
                    console.log('salah 1');
                } else {
                    const isPassMatched = comparePassword(password, user.password)
                    if (!isPassMatched) {
                        next({name: 'invalid email or password'})
                        console.log('salah 2');
                    } else {
                        const token = generateToken({
                            id: user.id, 
                            name: user.name, 
                            email: user.email
                        })
                        res.status(200).json({
                            id: user.id, 
                            name: user.name, 
                            email: user.email,
                            token: token
                        })
                    }
                }
            })
            .catch(err => {
                console.log('salah 3');
                next(err)
            })
    }
}

module.exports = UserController