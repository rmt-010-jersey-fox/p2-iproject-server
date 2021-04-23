const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

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
                    console.log(password)
                    console.log(user.password)
                    const isMatched = comparePassword(password, user.password)
                    if (!isMatched) {
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
                console.log('salah 3')
                console.log('----')
                console.log(err)
                next(err)
            })
    }
}

module.exports = UserController