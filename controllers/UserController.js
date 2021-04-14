const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')


class UserController {
    static register (req,res,next) {
        const { username, email,password} = req.body

        User.create({
            username,
            email,
            password
        },{returning : true})

        .then () 
        .catch ()
    }

    static login (req,res,next) {
        const { email,password } = req.body;

        User.findOne ({
            where : {email}
        })

        .then ()
        .catch()
    }

    static googleLogin (req,res,next) {
        
    }
}

module.exports = UserController;