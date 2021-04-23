const express = require('express');
const { authenticate } = require('../middlewares/auth-middleware')
const newsController = require('../controllers/newsController')
const router = express.Router()

router.use(authenticate)

// router.post('/', TransactionController.create)
router.get('/', newsController.findAll)

module.exports = router