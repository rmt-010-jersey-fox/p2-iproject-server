const patientRouter = require('express').Router()
const PatientCtrl = require('../controllers/patient')
const authenticate = require('../middlewares/authentication')

patientRouter.post('/register', PatientCtrl.register)
patientRouter.post('/login', PatientCtrl.login)

patientRouter.use(authenticate)
patientRouter.get('/:id', PatientCtrl.getById)

module.exports = patientRouter