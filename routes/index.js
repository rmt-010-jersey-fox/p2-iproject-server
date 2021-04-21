const express = require('express')
const router = express.Router()
const mealsRouter = require('../routes/mealsRouter')
const drinksRouter = require('../routes/drinksRouter')
const UserController = require('../controllers/userController')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })

router.use('/meals', mealsRouter)
router.use('/drinks', drinksRouter)


module.exports = router