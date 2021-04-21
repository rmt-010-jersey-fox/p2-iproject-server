const {Appointment} = require('../models')

function authorizeCustomer(req,res,next){ 
  const id = +req.params.id
    Appointment.findByPk(id)
      .then((appointment)=>{
        if(appointment){
          if(appointment.dataValues.UserId===req.loggedUser.id){
            next()
          } else {
            next({name : "invalidJWT"})
          }
        } else {
          next({name : "invalidJWT"})
          // res.status(400).json({message: "maaf kamu tidak berhak untuk fitur ini"})
        }
      })
      .catch((err)=>{
        // res.status(500).json({message: err.message})
        next(err)
      })
}

module.exports = authorizeCustomer