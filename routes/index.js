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
router.get('/book/:isbn', BookController.oneBook)

router.use(authentication)

router.get('/favouriteBooks/comment/:isbn', favouriteBookController.findAllComment)
router.get('/favouriteBooks/wishLikeAmount/:isbn', favouriteBookController.findAllWishedLike)
router.post('/favouriteBooks/like/', favouriteBookController.likeBook)
router.post('/favouriteBooks/dislike/', favouriteBookController.dislikeBook)
router.post('/favouriteBooks/comment/', favouriteBookController.commentBook)
router.post('/favouriteBooks/editComment/', favouriteBookController.editComment)
router.delete('/favouriteBooks/deleteComment/:isbn', favouriteBookController.deleteComment)
router.get('/favouriteBooks/', favouriteBookController.showWishList)
router.post('/favouriteBooks/', favouriteBookController.addWishlist)
router.delete('/favouriteBooks/:id', authorization, favouriteBookController.delete)

router.use(authorization)
router.get('/nyTimes', NYTimes.fetchData)

module.exports = router