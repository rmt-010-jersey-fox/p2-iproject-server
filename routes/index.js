const router = require('express').Router();
const AnimeRouter = require('./animeRoute.js')
const UserController = require('../controllers/userController')
const AnimeController = require("../controllers/animeController.js")
const {authentication} = require("../middlewares/auth.js")


router.post('/register', UserController.registerUser)

router.post('/login', UserController.loginUser)

router.post('/google-login', UserController.verifyLogin)

router.use(authentication)

router.use("/anime", AnimeRouter)

router.get('/quotes-anime', AnimeController.quotesAnime)

router.get('/manga', AnimeController.mangas)


module.exports = router