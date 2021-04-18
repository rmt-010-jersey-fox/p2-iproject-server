const { Tournament, User, Team } = require('../models')

class TeamController{
  static addTeam(req, res, next){
    let input = {
      name: req.body.name,
      description: req.body.description,
      TournamentId: req.loggedUser.TournamentId
    }
    Team.findAll({ where: { TournamentId: req.loggedUser.TournamentId }})
      .then((data) => {
        if(data.length < 8){
          return Team.create(input)
        } else {
          throw { name: 'fullteam' }
        }
      })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static editTeam(req, res, next) {
    let input = {
      name: req.body.name,
      description: req.body.description,
    }
    Team.update(input, { where: { id: req.params.id }, returning: true })
    .then((data) => {
      res.status(200).json(data[1][0])
    })
    .catch((err) => [
      next(err)
    ])
  }
}

module.exports = { TeamController }