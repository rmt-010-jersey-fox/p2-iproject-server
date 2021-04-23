const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {
    static async register(req, res) {
        try {
            let { email, password } = req.body
            let data = await User.create({
                email,
                password
            })
            res.status(201).json({id: data.id, email: data.email}) 
        }
        catch(err) {
            res.status(500).json(err.message)
        }
    }
    static async login(req, res) {
        try {
            let { email, password } = req.body
            let data = await User.findOne({
                where: {
                    email
                }
            })
            if(data) {
                let isPassword = comparePassword(password, data.password)
                if(isPassword) {
                    let token = sign({
                        id: data.id,
                        email: data.email
                    })
                    res.status(200).json({id: data.id, email: data.email, access_token: token})
                }else {
                    res.status(401).json({message: 'password salah'})
                }
            }else {
                res.status(401).json({message: 'invalid password / email'})
            }
        }
        catch(err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = UserController