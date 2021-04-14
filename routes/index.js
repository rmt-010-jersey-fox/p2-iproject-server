const router = require('express').Router
const userController = require('../controllers/userController')
const memeController = require('../controllers/memeController')
const apiController = require('../controllers/apiController')
const {authenticate} = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello, Welcome')
  })

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/loginGoogle', userController.google)

router.get('/jokes', apiController.jokeApi)
router.get('/quote', apiController.apiQuotable)
router.get('/bored', apiController.boredApi)

router.use(authenticate)

router.post('/memes', memeController.add)

router.get('/memes/:id', memeController.findById)
router.put('/memes/:id', memeController.updateAll)
router.delete('/memes/:id', memeController.delete)

module.exports = router