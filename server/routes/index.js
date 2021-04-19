const router = require('express').Router()
const UserController = require('../controllers/user-controller')
const { authentication, authorizationCat } = require('../middlewares/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.use(authentication)

module.exports = router
