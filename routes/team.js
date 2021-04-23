const { TeamController } = require('../controllers/TeamController')
const { authenticate, authorizeUserTournamnet } = require('../middlewares/auth')
const team = require('express').Router()

team.use(authenticate)
team.use(authorizeUserTournamnet)
team.get('/', TeamController.getTeam)
team.post('/', TeamController.addTeam)
team.put('/:id', TeamController.editTeam)

module.exports = team