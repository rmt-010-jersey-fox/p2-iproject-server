const router = require('express').Router()
const UserController = require('../controllers/UserControllers')
const RoomController = require('../controllers/RoomControllers')
const {authentic} = require('../middlewares/Authentication')
const {authorization} = require('../middlewares/authorization')
const {authorizationCustomer} = require ('../middlewares/authorization')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/clogin', UserController.customerLogin)
router.get('/rooms', RoomController.getRoom)

router.use(authentic)
router.post('/rooms', RoomController.postRoom)

router.use('/rooms/:id', authorization)
router.delete('/rooms/:id', RoomController.deleteRoom)
router.put('/rooms/:id', RoomController.putRoom)

router.use('/rooms/:id', authorizationCustomer)
router.get('/rooms/:id', RoomController.getRoomId)


module.exports = router