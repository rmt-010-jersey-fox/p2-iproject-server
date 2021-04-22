const {User} = require('../models/')
const {comparePassword} = require('../helpers/password')
const {generateToken} = require('../helpers/jwt')

class UserController {
    static async register(req,res,next) {
        try {
            const {email,password,role} = req.body
            const user = await User.create({
                email,
                password,
                role
            })
            res.status(201).json({
                id: user.id,
                email: user.email,
                role: user.role
            })
        } catch (err) {
            next(err)
        }  
    }

    static async login(req,res,next) {
        try {
            const {email,password} = req.body;
            const user = await User.findOne({where: {email: email}})
            
            if (!user) {
                throw {
                    name: 'UserNotFound'
                }
            } else if (!comparePassword(password, user.password) || email !== user.email) {
                throw {
                    name: 'WrongEmail/Password'
                }
            } else {
                const access_token = generateToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({access_token:access_token})
            }
        } catch (err) {
            console.log(err);
            next(err)
        }
    }   
}

module.exports = UserController