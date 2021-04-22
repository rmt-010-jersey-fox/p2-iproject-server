const router = require('express').Router()

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
router.get('/memegacha', apiController.memeGacha)
router.get('/memegenerate', apiController.generateMeme)

router.get('/memes', memeController.showAll) // done
router.get('/memes/list/reported', memeController.showAllReported) // done
router.get('/memes/list/hot', memeController.showAllHot) // done

router.use(authenticate)

router.get('/user/profile', memeController.findByUser) // done
router.get('/memes/:id', memeController.findById) // done

router.patch('/memes/yes', memeController.likes) // done
router.patch('/memes/nope', memeController.dislikes) // done
router.patch('/memes/reported', memeController.reported) // done
router.patch('/memes/unreported', memeController.unreported) // done

router.post('/memes/add', memeController.add) // done
router.put('/memes/:id', memeController.updateAll)
router.delete('/memes/:id', memeController.delete) // done

module.exports = router