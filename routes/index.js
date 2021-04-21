const router = require('express').Router();
const studentRouter = require('./studentRoute');
const UserController = require('../controllers/userController')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(studentRouter)

module.exports = router