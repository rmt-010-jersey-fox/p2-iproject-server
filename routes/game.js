const gameRoute = require('express').Router()
const GameCtrl = require('../controllers/GameCtrl')

gameRoute.get('/', GameCtrl.showGame)

module.exports = gameRoute