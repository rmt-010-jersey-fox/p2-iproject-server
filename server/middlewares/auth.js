const { verify } = require('../helper/jwt')
const { User } = require('../models')

function authentication (req,res,next){
    const { access_token } = req.headers
    const decoded = verify(access_token)
    // console.log(access_token);
    if(access_token){
        User.findOne({
            where: {email: decoded.email}
        })
        .then((user)=>{
            // console.log(user);
            if(user){
                
                req.loggedUser = {
                    id: decoded.id,
                    email: decoded.email
                }
                next() 
            } else {
                next({message: "Please login first!"})
            }
            
        })
        .catch((err)=>{
            next({message: "Invalid Token Access!"})
        })
    } else {
        // console.log('masuk');
        next({message: "Internal Server Error!"})
    }
}


module.exports = {authentication}
