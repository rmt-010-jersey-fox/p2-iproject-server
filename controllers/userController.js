const { User } = require('../models')
const { comparePsw } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
class UserController {
    static async register(req, res, next) {
        console.log(req.body)
        try {
            let { email, password, first_name, last_name } = req.body;
            let data = {
                email, password, first_name, last_name
            }
            let created = await User.create(data)
            res.status(201).json({
                id : created.id,
                email : created.email,
                first_name : created.first_name,
                last_name : created.last_name
            })
        } catch (error) {
            next(error)
        } 
    }
    static async login(req, res, next) {
        let { email, password } = req.body;
        try {
            let findUser = await User.findOne({
                where : {
                    email : email
                }
            })
            if (findUser) {
                const isMatch = comparePsw(password, findUser.password)
                if (isMatch) {
                    //generate jwt
                    let data = {
                        id : findUser.id, 
                        email : findUser.email
                    }
                    const token = generateToken(data)
                    res.status(200).json({ token : token})
                } else {
                    throw {
                        name : "Unauthorized"
                    }
                }
            } else {
                throw {
                    name : "Unauthorized"
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController