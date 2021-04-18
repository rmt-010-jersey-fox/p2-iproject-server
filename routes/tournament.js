const { TournamentController } = require('../controllers/TournamentController')
const { authenticate, authorizeUserTournamnet } = require('../middlewares/auth')
const tournament = require('express').Router()

tournament.get('/', TournamentController.getTournament)
tournament.use(authenticate)
tournament.post('/', TournamentController.addTournament)
tournament.put('/:id', authorizeUserTournamnet, TournamentController.editTournament)

module.exports = tournament