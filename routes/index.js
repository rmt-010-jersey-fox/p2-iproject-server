const router = require('express').Router()
const authenticate = require('../middlewares/auth')
const UserController = require('../controller/userController')
const WasteController = require('../controller/wasteController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authenticate)

router.get('/wastes', WasteController.getWaste)
router.get('/saldo', WasteController.getSaldo)
router.post('/saldo', WasteController.postSaldo)
router.patch('/saldo/deposit', WasteController.deposit)
router.patch('/saldo/:WasteId', WasteController.patchQuantity)
router.delete('/saldo/:WasteId', WasteController.deleteWaste)

module.exports = router