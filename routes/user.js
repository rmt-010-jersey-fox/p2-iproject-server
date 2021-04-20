const userRoute = require('express').Router()
const UserCtrl = require('../controllers/UserCtrl')

userRoute.post('/signup', UserCtrl.signup)
userRoute.post('/signin', UserCtrl.signin)

module.exports = userRoute