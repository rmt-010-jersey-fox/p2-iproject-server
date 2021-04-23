const express = require('express');
const { authenticate } = require('../middlewares/auth-middleware')
const quotesController = require('../controllers/quotesController')
const router = express.Router()

router.use(authenticate)

// router.post('/', TransactionController.create)
router.get('/', quotesController.findAll)

module.exports = router