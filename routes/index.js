const express = require('express');
const router = express.Router()

const AuthController = require('../controllers/authController');
const productRoute = require('./product')
const locationRoute = require('./location')
const cartRoute = require('./cart')
const bannerRoute = require('./banner')
const transactionRoute = require('./transaction')
const wishlistRoute = require('./wishlist')
const newsRoute = require('./news')
const quotesRoute = require('./quotes')

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

router.use('/quotes', quotesRoute)
router.use('/news', newsRoute)
router.use('/location', locationRoute)
router.use('/product', productRoute)
router.use('/cart', cartRoute)
router.use('/banner', bannerRoute)
router.use('/transaction', transactionRoute)
router.use('/wishlist', wishlistRoute)

module.exports = router