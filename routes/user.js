const userRoute = require('express').Router()
const UserCtrl = require('../controllers/UserCtrl')

userRoute.post('/signup', UserCtrl.signup)

module.exports = userRoute