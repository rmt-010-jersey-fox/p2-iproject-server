const router = require('express').Router()
const UserController = require('../controllers/UserControllers')
const RoomController = require('../controllers/RoomControllers')
const BookController = require('../controllers/BookingControllers')
const {authentic} = require('../middlewares/Authentication')
const {authorization} = require('../middlewares/authorization')
const {authorizationCustomer} = require ('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/clogin', UserController.customerLogin)
router.get('/rooms', RoomController.getRoom)

router.use(authentic)
router.post('/rooms', RoomController.postRoom)
router.post('/books', BookController.addBook)
router.get('/books', BookController.getBook)
router.delete('/books/:id', authorizationCustomer, BookController.deleteBook)



router.use('/rooms/:id', authorization)
router.delete('/rooms/:id', RoomController.deleteRoom)
router.put('/rooms/:id', RoomController.putRoom)
router.get('/rooms/:id',RoomController.getRoomId)

module.exports = router