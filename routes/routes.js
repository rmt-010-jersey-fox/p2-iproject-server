const routes = require('express').Router()
const UsersController = require('../controllers/usercontroller')
const { authenticate } = require('../middlewares/authentication')
const FinanceRoutes = require('./FinanceRoutes')

routes.post('/signup', UsersController.signup)
routes.post('/signin', UsersController.signin)

routes.use(authenticate)
routes.use('/finances', FinanceRoutes)


module.exports = routes