const { TwitterController } = require('../controllers/TwitterController')
const twitter = require('express').Router()

twitter.get('/:id', TwitterController.getTwitterPerTournament)

module.exports = twitter