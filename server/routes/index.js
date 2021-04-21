const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const ThirdApiController = require('../controllers/third-api-controller')
const { authentication, authorizationCat } = require('../middlewares/auth')
const CatController = require('../controllers/cat-controller')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/cat-api', ThirdApiController.catApi)
router.get('/random-quote', ThirdApiController.randomQuote)

router.use(authentication)

router.get('/users/:username', UserController.getUserByUsername)
router.get('/photos', CatController.getPhotos)
router.post('/photos', CatController.addPhoto)
router.post('/cats', CatController.addCat)
router.delete('/cats/:id', CatController.deleteCat)

module.exports = router
