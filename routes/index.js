const router = require('express').Router()
// const UserController = require('../controllers/userControllers')
const MovieController = require('../controllers/movieControllers')
// const authentication = require('../middlewares/authentication')

// router.post('/register', UserController.register)
// router.post('/login', UserController.login)
// router.use(authentication)

router.get('/movies/popular', MovieController.moviePopular)
router.get('/movies/top_rated', MovieController.movieTopRate)
router.get('/movies/upcoming', MovieController.moviesUpcoming)
router.get('/movies/:id', MovieController.detailMovies)
router.get('/movies/genre/list', MovieController.listGenre)

module.exports = router