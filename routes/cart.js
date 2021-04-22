const express = require('express');
const { authenticate, authorizeCart } = require('../middlewares/auth-middleware')
const CartController = require('../controllers/cartController')
const router = express.Router()

router.use(authenticate)

router.get('/', CartController.findAll)
router.post('/', CartController.create)
router.patch('/:id', authorizeCart, CartController.update)
router.delete('/:id', authorizeCart, CartController.delete)

module.exports = router