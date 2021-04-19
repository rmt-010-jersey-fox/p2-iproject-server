const FinanceRoutes = require('express').Router()
const FinanceController = require('../controllers/FinanceController')
const FinanceDetailController = require('../controllers/FinanceDetailController')
const { authorizeFinance } = require('../middlewares/authorizeFinance')

FinanceRoutes.get('/', FinanceController.findByUser)
FinanceRoutes.post('/', FinanceController.create)
FinanceRoutes.post('/:financeId/create', authorizeFinance, FinanceDetailController.create)
// FinanceRoutes.post('/:financeId/detail', authorizeFinance, FinanceDetailController.detail)
FinanceRoutes.get('/all', FinanceDetailController.readAll)

module.exports = FinanceRoutes