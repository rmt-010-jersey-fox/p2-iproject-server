var express = require('express')
const BookController = require('../controller/bookController')
const NYTimes = require('../controller/NYTimesController')
const userController = require('../controller/userController')
const favouriteBookController = require('../controller/favouriteBookController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
var router = express.Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleLogin', userController.googleLogin)
router.get('/nyTimes', NYTimes.fetchData)
router.get('/books/:category', BookController.findAll)

router.use(authentication)

router.get('/favouriteBooks/', favouriteBookController.showWishList)
router.post('/favouriteBooks/', favouriteBookController.addWishlist)

router.delete('/favouriteBooks/:id', authorization, favouriteBookController.delete)

module.exports = router