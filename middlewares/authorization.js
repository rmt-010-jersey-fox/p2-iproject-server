const {User,Room} = require('../models')


async function authorization(req,res,next){
    try{
        const user = await User.findOne({where:{email:req.user.email}})
        if(!user){
            throw {status:401, message:"Not Authorized"}
        }else{
            if(user.role ==='admin'){
                next()
            }else{
                throw{status:401, message:"Unauthorized"}
            }
        }
    }catch(err){
        next(err)
    }
}

async function authorizationCustomer (req,res,next){
    try{
        const room = await Room.findOne({
            where:{
                UserId:req.user.id
            }
        })
        if(!room){
            throw{status:401,message:"UnAuthorized"}
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}
module.exports = {authorization,authorizationCustomer}