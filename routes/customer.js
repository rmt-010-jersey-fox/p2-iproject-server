const express = require('express')
const routerCustomer = express.Router()
const CustomerController = require('../controllers/customerControllers')
const autenticate = require('../middlewares/autenticationCustomer')
const authorizeCustomer = require('../middlewares/authorizeCustomer')

routerCustomer.post('/register',CustomerController.postRegister)
routerCustomer.post('/login',CustomerController.postLogin)
routerCustomer.get('/barbershops',CustomerController.getBarberShops)
routerCustomer.post('/barbers/',CustomerController.postBarbers)

routerCustomer.use('/',autenticate)
routerCustomer.get('/appointments',CustomerController.getAppointment)
routerCustomer.post('/appointments/:barbershopid',CustomerController.postAppointments)

routerCustomer.use('/appointments/:id',authorizeCustomer)
routerCustomer.patch('/appointments/:id/reschedule',CustomerController.reschedule)
routerCustomer.patch('/appointments/:id/rating',CustomerController.rating)
routerCustomer.delete('/appointments',CustomerController.deleteAppointments)


module.exports = routerCustomer