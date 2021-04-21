const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {signJwt} = require('../helpers/jsonWToken')

class UserController{
    static register(req,res,next){
        const {username, email, password} = req.body
        User.create({username,email, password})
        .then(user=>{
            res.status(201).json({
                id:user.id,
                username:user.username,
                email:user.email
            })
        }).catch(err=>{
            next(err)
        })
    }

    static login(req,res,next){
        const {email,password} = req.body
        User.findOne(
            {where:{email}
        }).then(user=>{
            if(!user){
                throw {msg:"Invalid email/password"}
            }else{
                if(user.role ==='admin'){
                    const comparePass = comparePassword(password,user.password)
                    if(!comparePass) throw {status:401,message:"Invalid Email/Password"}
                    else{
                        const access_token = signJwt({id:user.id, email:user.email})
                        res.status(200).json({access_token})
                    }
                }else{
                    throw{status:401,message:"you're not Authorized to Login"}
                }
            }
        }).catch(err=>{
            res.status(500).json({message:err.message || "Internal Server Error"})
        })
    }

    static customerLogin(req,res,next){
        const {email,password} = req.body
        User.findOne(
            {where:{email}
        }).then(user=>{
            if(!user){
                throw {msg:"Invalid email/password"}
            }else{
                if(user.role ==='customer'){
                    const comparePass = comparePassword(password,user.password)
                    if(!comparePass) throw {status:401,message:"Invalid Email/Password"}
                    else{
                        const access_token = signJwt({id:user.id, email:user.email})
                        res.status(200).json({access_token})
                    }
                }else{
                    throw{status:401,message:"you're not Authorized to Login"}
                }
            }
        }).catch(err=>{
            res.status(500).json({message:err.message || "Internal Server Error"})
        })
    }
}
module.exports = UserController