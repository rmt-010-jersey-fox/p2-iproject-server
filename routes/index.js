const express = require('express')
const APIController = require('../controllers/apiController')
const SongController = require('../controllers/songController')
const UserController = require('../controllers/userController')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const playlistRouter = require('./playlistRouter')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/search', APIController.dataToFetch)
router.post('/lyrics', APIController.geniusLyrics)

router.get('/songs', SongController.findAll)
router.post('/songs', SongController.create)
router.get('/songs/:id', SongController.findOne)

router.use(authentication)
router.use('/', playlistRouter)

module.exports = router