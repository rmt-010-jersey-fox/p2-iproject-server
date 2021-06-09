const Controller = require('../controller/userController');
const userRouter = require('express').Router();

userRouter.post('/login', Controller.login)
userRouter.post('/register', Controller.register)

module.exports = userRouter