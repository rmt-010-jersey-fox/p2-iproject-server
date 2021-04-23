const {User} = require('../models')
const {comparePassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')
class Controller {

    static register(req,res,next){
        let input = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username    
       }
       User.create(input)
       .then((data)=>{
           res.status(201).json({id: data.id, email: data.email , username: data.username})
       })
       .catch((err)=>{
           next(err.message)
       })

    }

    static login(req,res,next){
        const email =  req.body.email
        const password = req.body.password

        User.findOne({where: {email}})
            .then((user)=>{
                if(!user){
                    next({message: 'User not found'})
                }
                else {
                    let isPasswordMatch = comparePassword(password, user.password)
                    if(!isPasswordMatch){
                       next('email/password not found')
                    } 
                    else {
                        const token = generateToken({
                            id: user.id,
                            email: user.email
                        })
                        res.status(200).json({access_token: token})
                    }
                }
                
            })
            .catch((err)=>{
                next(err);
            })

    
    }
}

module.exports = Controller