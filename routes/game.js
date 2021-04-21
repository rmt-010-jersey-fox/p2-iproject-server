const gameRoute = require('express').Router()
const GameCtrl = require('../controllers/GameCtrl')
const { authenticate } = require('../middlewares/auth')

gameRoute.get('/', GameCtrl.showGame)

gameRoute.use(authenticate)
gameRoute.post('/', GameCtrl.wishlist)

module.exports = gameRoute