const router = require('express').Router()
const Controller = require('../controllers/Controller')
const { authentication } = require('../middlewares/auth.js')


router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.get('/getUpdate', Controller.getUpdate)
router.use(authentication)
router.get('/anime', Controller.showAnime)
router.get('/completed', Controller.showCompleted)
router.post('/anime', Controller.addAnime)
router.get('/anime/:id', Controller.showAnimeById)
router.patch('/anime/:id', Controller.editEpisodes)
router.put('/anime/:id', Controller.editAnime)
router.delete('/anime/:id', Controller.deleteAnime)



module.exports = router