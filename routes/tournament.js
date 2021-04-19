const { TournamentController } = require('../controllers/TournamentController')
const { authenticate, authorizeUserTournamnet } = require('../middlewares/auth')
const tournament = require('express').Router()

tournament.get('/', TournamentController.getTournament)
tournament.get('/:id', TournamentController.getBracketByTournamentId)
tournament.use(authenticate)
tournament.post('/', TournamentController.addTournament)
tournament.put('/:id', authorizeUserTournamnet, TournamentController.editTournament)
tournament.delete('/:id', authorizeUserTournamnet, TournamentController.finishTournament)

module.exports = tournament