const { BracketController } = require('../controllers/BracketController')
const { authenticate, authorizeUserTournamnet } = require('../middlewares/auth')
const bracket = require('express').Router()

bracket.use(authenticate)
bracket.use(authorizeUserTournamnet)
bracket.post('/', BracketController.addTeamtoBracket)
// bracket.put('/:id', TeamController.editTeam)

module.exports = bracket