const {BarberShop,Barber,Service,User,Appointment} = require('../models')
const {comparePassword,hashPassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')
class CustomerController{
  static postRegister(req,res,next){
    const {username,email,phone,password} = req.body
    User.create({username,email,phone,password})
      .then((data)=>{
        let {id, username, email, phone}=data
        res.status(201).json({id, username, email, phone})
      })
      .catch((err)=>{
        // res.status(400).json(err)
        next(err)
      })
  }

  static postBarbers(req,res,next){
    const {BarberShopId,name,status} = req.body
    console.log(BarberShopId,'<<<<<<<<<<<<<<');
    Barber.create({BarberShopId,name,status})
      .then((data)=>{
        let {id, BarberShopId,name,status}=data
        res.status(201).json({id, BarberShopId,name,status})
      })
      .catch((err)=>{
        // res.status(400).json(err)
        next(err)
      })
  }

  static postLogin(req,res,next){
    User.findOne({where:{
      email: req.body.email,
    }})
      .then((data)=>{
        if(!data){
          // res.status(400).json({message: "Invalid Email or Password"})
          next({name: "invalidLogin"})
        } else {
          const isMatchPassword = comparePassword(req.body.password,data.password)
          if(!isMatchPassword){
          next({name: "invalidLogin"})
          } else{
            const token = generateToken({
              id: data.id,
              email: data.email,
              phone: data.phone,
              username: data.username
            })
            res.status(200).json({access_token: token, username: data.username})
          }
          res.status(200).json({access_token: token, username: data.username})
        }
      })
      .catch((err)=>{
        next(err)
      })
  }

  static postAppointments(req,res,next){
    const {ServiceId, BarberId, date, scheduleStart, scheduleEnd} = req.body
    Appointment.findOne({where:{
      UserId: req.loggedUser.id,
      status: 'progress'
      }
    })
    .then((data)=>{
      if(data===null){
        return Appointment.create({
          UserId: req.loggedUser.id,
          BarberShopId: req.params.barbershopid,
          ServiceId,
          BarberId,
          date,
          scheduleStart,
          scheduleEnd
        },
        next)
      } else {
        res.status(400).json({message: 'Sorry You Already Have an Appointment, Cancel or Finish your Apointment First!'})
      }
    })
    .then((appointment)=>{
      if(appointment[0]==1){
        res.status(200).json(appointment[1][0])
      } else {
        res.status(200).json(appointment)
      }
    })
    .catch((err)=>{
     next(err)
    })
  }

  static getBarberShops(req,res,next){
    BarberShop.findAll({ attributes: {exclude: ['password']},
      include: [
      {
        model:  Service
      },
      {
        model:  Barber
      }
    ]
    })
      .then((data)=>{
        res.status(200).json(data)
      })
      .catch((err)=>{
        next(err)
      })
  }

  static getAppointment(req,res,next){
    Appointment.findOne({ where: {
      UserId: req.loggedUser.id,
      status: 'progress'
    },
    include: [
      {
        model:  Service
      },
      {
        model:  Barber
      }
    ]
    })
      .then((data)=>{
        res.status(200).json(data)
      })
      .catch((err)=>{
        next(err)
      })
  }

  static reschedule(req,res,next){
    let {date,scheduleStart,scheduleEnd} = req.body
    Appointment.update({date,scheduleStart,scheduleEnd},{where:{id:req.params.id},returning:true})
    .then((data)=>{
      if(data[0]==1){
        res.status(200).json(data[1][0])
      } else {
        next({name:"AppointmentNotFound"})
      }
    })
    .catch((err)=>{
      next(err)
    })
  }

  static rating(req,res,next){
    let {message,rating} = req.body
    Appointment.update({message,rating},{where:{id:req.params.id},returning:true})
    .then((data)=>{
      if(data[0]==1){
        res.status(200).json(data[1][0])
      } else {
        next({name:"AppointmentNotFound"})
      }
    })
    .catch((err)=>{
      next(err)
    })
  }

  static deleteAppointments(req,res,next){
    Appointment.destroy({where:{
      id: +req.params.id
    }})
      .then((data)=>{
        if(data){
          res.status(200).json({message:"success to delete"})
        } else {
          next({name:"AppointmentNotFound"})
        }        
      })
      .catch((err)=>{
        next(err)
      })
  }
}
module.exports = CustomerController