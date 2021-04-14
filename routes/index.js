const router = require('express').Router()
const userController = require('../controllers/userController')
const eventController = require('../controllers/eventController')
const threadController = require('../controllers/threadController')
const { authenticate } = require('../middlewares/auth')


router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleLogin', userController.googleLogin)

router.use(authenticate)
router.get('/events', eventController.getEvent)
router.post('/events', eventController.postEvent)
router.get('/events/:id', eventController.getEventById)
router.put('/events/:id', eventController.putEvent)
router.patch('/events/:id', eventController.patchEvent)
router.delete('/events/:id', eventController.deleteEvent)

router.get('/threads', threadController.getThread)
router.post('/threads', threadController.postThread)
router.get('/threads/:id', threadController.getThreadById)
router.put('/threads/:id', threadController.putThread)
router.patch('/threads/:id', threadController.patchThread)
router.delete('/threads/:id', threadController.deleteThread)



module.exports = router