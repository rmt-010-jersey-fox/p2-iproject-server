const express = require('express')
const mySquadRoute = require('./mySquadRoute')
const playerRoute = require('./playerRoute')
const { UserController } = require('../controllers/userController')
const { HighlightController } = require('../controllers/highlightController')
const router = express.Router()

router.get('/highlights', HighlightController.getVideo)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/loginGoogle', UserController.loginGoogle)
router.use('/player', playerRoute)
router.use('/mySquad', mySquadRoute)

module.exports = router