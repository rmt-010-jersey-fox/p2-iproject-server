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
router.get('/books/:category', BookController.findAll)
router.get('/bookDetails/:isbn', BookController.oneBook)

router.get('/favouriteBooks/', authentication, favouriteBookController.showWishList)
router.post('/favouriteBooks/', authentication, favouriteBookController.addWishlist)
router.delete('/favouriteBooks/:isbn', authentication, favouriteBookController.delete)
router.get('/favouriteBooks/comments/:isbn', authentication, favouriteBookController.findAllComment)
router.post('/favouriteBooks/comments/', authentication, favouriteBookController.commentBook)
router.patch('/favouriteBooks/comments/', authentication, favouriteBookController.editComment)
router.delete('/favouriteBooks/comments/:isbn', authentication, favouriteBookController.deleteComment)
router.get('/favouriteBooks/likes/:isbn', authentication, favouriteBookController.findAllWishedLike)
router.post('/favouriteBooks/likes/', authentication, favouriteBookController.likeBook)
router.patch('/favouriteBooks/likes/', authentication, favouriteBookController.dislikeBook)

router.post('/nyTimes', authorization, NYTimes.fetchData)

module.exports = router