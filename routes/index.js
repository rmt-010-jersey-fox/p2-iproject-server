const router = require('express').Router()
const userController = require('../controllers/userController')
const eventController = require('../controllers/eventController')
const threadController = require('../controllers/threadController')
const gameController = require('../controllers/gameController')
const { authenticate, authorization } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleLogin', userController.googleLogin)

router.use(authenticate)
router.get('/users', userController.getUsers)
router.get('/games', gameController.getGames)
router.get('/events', eventController.getEvent)
router.get('/threads', threadController.getThread)
router.get('/users/:id', userController.getUserByPk)
router.put('/users', userController.putUser)
router.patch('/users', userController.patchUser)
router.delete('/users', userController.deleteUser)

router.post('/events', eventController.postEvent)
router.get('/events/:id', eventController.getEventById)
router.put('/events/:id', eventController.putEvent)
router.patch('/events/:id', eventController.patchEvent)
router.delete('/events/:id', eventController.deleteEvent)

router.post('/threads', threadController.postThread)
router.get('/threads/:id', threadController.getThreadById)
router.put('/threads/:id', threadController.putThread)
router.patch('/threads/:id', threadController.patchThread)
router.delete('/threads/:id', threadController.deleteThread)

router.get('/games/:id', gameController.getGameById)
router.post('/games', gameController.postGame)
router.put('/games/:id', gameController.putGame)
router.delete('/games/:id', gameController.deleteGame)



module.exports = router