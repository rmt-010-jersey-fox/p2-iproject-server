const express = require('express')
const UserController = require('../controllers/userController')
const router = express.Router()
const authentication = require('../middlewares/authentication')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(authentication)

module.exports = router