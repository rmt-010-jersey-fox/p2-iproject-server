const express = require('express')
const BookController = require('../controllers/bookController')
const PublicApiController = require('../controllers/publicApiController')
const UserController = require('../controllers/userController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
const router = express.Router()

router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.use(authentication)

router.get('/profile', UserController.profile)

router.get('/books', BookController.read)
router.post('/books', BookController.add)

router.post('/books/search', PublicApiController.searchBooks)
router.get('/books/recommendation', PublicApiController.getBooksRecommendation)

router.use('/books/:id', authorization)

router.get('/books/:id', BookController.getOne)
router.put('/books/:id', BookController.update)
router.delete('/books/:id', BookController.delete)

module.exports = router