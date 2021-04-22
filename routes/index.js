const express = require('express');
const DiseaseController = require('../controllers/disease');
const PatientController = require('../controllers/patient');
const route = express.Router();
const UserController = require('../controllers/user');
const APIController = require('../controllers/publicApi');

const { authentication, authorizationPatient } = require('../middlewares/auth');

route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.get('/calendar', APIController.getCalendar)
route.get('/covid', APIController.getCovidCases)
route.get('/weather', APIController.getWeather)


route.use(authentication)

route.post('/patient', PatientController.inputPatientData)
route.get('/patient', PatientController.getPatientData)
route.get('/patient/:id', authorizationPatient, PatientController.getPatientById)
route.put('/patient/:id', authorizationPatient, PatientController.updatePatientData)
route.patch('/patient/:id/dispatch', authorizationPatient, PatientController.updateStatusToTrue)
route.patch('/patient/:id/survey', authorizationPatient, PatientController.updateStatusToFalse)
route.delete('/patient/:id', authorizationPatient, PatientController.deletePatient)


route.post('/disease', DiseaseController.inputDiseaseData)
route.get('/disease', DiseaseController.showDiseaseData)
route.delete('/disease/:id', DiseaseController.deleteDisease)




module.exports = route