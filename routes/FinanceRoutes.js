const FinanceRoutes = require('express').Router()
const FinanceController = require('../controllers/FinanceController')
const FinanceDetailController = require('../controllers/FinanceDetailController')
const { authorizeFinance } = require('../middlewares/authorizeFinance')
const { authorizeFinanceDetail } = require('../middlewares/authorizeFinanceDetail')

FinanceRoutes.get('/', FinanceController.findByUser) // get semua dompet user
FinanceRoutes.post('/', FinanceController.create) // buat dompet
FinanceRoutes.get('/saldo', FinanceController.getDataSaldo) // ambil semua saldo wallet
FinanceRoutes.get('/all', FinanceDetailController.readAll) // ambil semua history transaction
FinanceRoutes.get('/:financeId', authorizeFinance, FinanceDetailController.detail) // get semua transaction di dompet by financeid terseubt
FinanceRoutes.post('/:financeId', authorizeFinance, FinanceDetailController.create) // buat transaction di dompet user
FinanceRoutes.delete('/:financeDetailId', authorizeFinanceDetail, FinanceDetailController.delete) // delete transaction di dompet user

module.exports = FinanceRoutes