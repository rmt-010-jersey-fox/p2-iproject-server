const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth-middleware')
const ProductController = require('../controllers/productController')
const router = express.Router()

router.get('/', ProductController.getActive)
router.use(authenticate)
router.post('/', authorize, ProductController.create)
router.get('/all', authorize, ProductController.findAll)
router.get('/:id', authorize, ProductController.detail)
router.put('/:id', authorize, ProductController.update)
router.patch('/:id', authorize, ProductController.updateStatus)
router.delete('/:id', authorize, ProductController.delete)

module.exports = router