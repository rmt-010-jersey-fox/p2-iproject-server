const { UserController } = require('../controllers/UserController')
const user = require('express').Router()

user.post('/register', UserController.register)
user.post('/login', UserController.login)

module.exports = user