const router = require('express').Router()
const UserController = require('../controllers/userControllers')
const MovieController = require('../controllers/movieControllers')
const authentication = require('../middlewares/authentication')
const WatchListController = require('../controllers/watchListController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

// router movies
router.get('/movies/popular', MovieController.moviePopular)
router.get('/movies/top_rated', MovieController.movieTopRate)
router.get('/movies/upcoming', MovieController.moviesUpcoming)

// router data movies & watchList
router.use(authentication)
router.get('/movies/:id', MovieController.detailMovies)
router.post('/addWatchList/:MovieId', WatchListController.addWatchList)
router.get('/watchList', WatchListController.showWatchList)
router.delete('/watchList/:id', WatchListController.deleteWatchList)

module.exports = router