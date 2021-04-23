const express = require('express');
const { authenticate } = require('../middlewares/auth-middleware')
const TransactionController = require('../controllers/transactionController')
const router = express.Router()

router.use(authenticate)

router.post('/', TransactionController.create)
router.get('/', TransactionController.findAll)

module.exports = router