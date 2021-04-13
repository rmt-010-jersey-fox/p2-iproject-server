const hospitalRouter = require('express').Router()
const hospitalCtrl = require('../controllers/hospital')

hospitalRouter.get('/doctor', hospitalCtrl.getDoctor)
hospitalRouter.get('/poli', hospitalCtrl.getPoli)

module.exports = hospitalRouter