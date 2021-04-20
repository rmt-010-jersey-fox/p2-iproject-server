const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const ThirdApiController = require('../controllers/third-api-controller')
const { authentication, authorizationCat } = require('../middlewares/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/cat-api', ThirdApiController.catApi)
router.get('/random-quote', ThirdApiController.randomQuote)
// router.use(authentication)

module.exports = router
