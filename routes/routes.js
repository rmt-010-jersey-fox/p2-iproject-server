const routes = require('express').Router()
const UsersController = require('../controllers/userscontroller')
const FinanceDetailsController = require('../controllers/financedetailscontroller')
const { authenticate } = require('../middlewares/authentication')
const { authorize } = require('../middlewares/authorize')
routes.post('/signup', UsersController.signup)
routes.post('/signin', UsersController.signin)

routes.use(authenticate)
routes.get('/finance/detail', authenticate, FinanceDetailsController.readAll)
routes.get('/finance/detail/:id', authorize, FinanceDetailsController.detail)


module.exports = routes