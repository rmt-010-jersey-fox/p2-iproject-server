const router = require('express').Router()
const UserCtr = require('../../controllers/UserController')

router.post('/register', UserCtr.register)
router.post('/login', UserCtr.login)
router.post('/googleLogin', UserCtr.googleLogin)

module.exports = router