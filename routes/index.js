const router = require('express').Router()
const userController = require('../controllers/userController')
const eventController = require('../controllers/eventController')
const threadController = require('../controllers/threadController')
const rawgController = require('../controllers/rawgController')
const { authenticate, authorization } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

// router.get('/users/activate/:id/:code', userController.activate)
router.post('/register', userController.register)
router.post('/login', userController.login)
// router.post('/googleLogin', userController.googleLogin)

router.use(authenticate)
router.get('/popularGames', rawgController.getPopularGames)
router.get('/users', userController.getUsers)
router.get('/events', eventController.getEvent)
router.get('/users/:id', userController.getUserByPk)
router.get('/avatar', rawgController.getAvatar)
router.put('/users', userController.putUser)
router.patch('/users', userController.patchUser)
router.delete('/users', userController.deleteUser)

router.post('/events', eventController.postEvent)
router.get('/events/:id', eventController.getEventById)
router.put('/events/:id', eventController.putEvent)
router.patch('/events/:id', eventController.patchEvent)
router.delete('/events/:id', eventController.deleteEvent)

router.get('/threads', threadController.getThread)
router.get('/mythreads', threadController.myThread)
router.post('/threads', threadController.postThread)
router.get('/threads/:id', threadController.getThreadById)
router.put('/threads/:id', authorization, threadController.putThread)
router.patch('/threads/:id', authorization, threadController.patchThread)
router.delete('/threads/:id', authorization, threadController.deleteThread)



module.exports = router