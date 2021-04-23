const router = require('express').Router()
const userController = require('../controllers/userController')
const artworkController = require('../controllers/artWork')
const {authentication}= require('../middlewares/auth')
router.post('/register', userController.register)
router.post('/login', userController.login)
// router.use(authentication)
router.get('/artworks', artworkController.getArts)
module.exports = router