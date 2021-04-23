const userRouter = require('express').Router()
const UserController = require('../controllers/user-controller')
const {
    authentication,
    userAuthorization
} = require('../middlewares/auth')

userRouter.post('/register', UserController.register)

userRouter.post('/login', UserController.login)

userRouter.post('/googleLogin', UserController.googleLogin)

userRouter.get('/users/:id', authentication, UserController.getUserById)

userRouter.get('/users', authentication, UserController.getUsers)

userRouter.patch('/users/:id', authentication, userAuthorization, UserController.changeUsername)

userRouter.patch('/users/avatar/:id', authentication, userAuthorization, UserController.changeAvatar)

userRouter.delete('/users/:id', authentication, userAuthorization, UserController.deleteUser)

module.exports = userRouter