const express = require('express');
const router = express.Router()

const AuthController = require('../controllers/authController');
const NewsController = require('../controllers/newsController')
const productRoute = require('./product')
const locationRoute = require('./location')
const cartRoute = require('./cart')
const bannerRoute = require('./banner')
const transactionRoute = require('./transaction')
const wishlistRoute = require('./wishlist')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.get('/news', NewsController.findAll)
router.use('/location', locationRoute)
router.use('/product', productRoute)
router.use('/cart', cartRoute)
router.use('/banner', bannerRoute)
router.use('/transaction', transactionRoute)
router.use('/wishlist', wishlistRoute)

module.exports = router