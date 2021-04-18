const { Tournament, User, Team } = require('../models')

class TournamentController {
  static addTournament(req, res, next) {
    let input = {
      name: req.body.name,
      description: req.body.description,
      game: req.body.game,
      UserId: req.loggedUser.id
    }
    Tournament.findOne({ where: { UserId: req.loggedUser.id } })
      .then((data) => {
        if (data) {
          throw { name: 'havetournament' }
        } else {
          return Tournament.create(input)
        }
      })
      .then((data) => {
        return User.findOne({ where: { id: req.loggedUser.id }, include: 'Tournament' })
      })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static editTournament(req, res, next) {
    let input = {
      name: req.body.name,
      description: req.body.description,
      game: req.body.game
    }
    Tournament.update(input, { where: { id: req.params.id }})
      .then((data) => {
        if(data[0] == 1){
          return User.findOne({ where: { id: req.loggedUser.id }, include: 'Tournament' })
        } else {
          throw { name: 'error' }
        }
      })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static getTournament(req, res, next) {
    Tournament.findAll({ include: { model: User, attributes: ['id', 'email'] } })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { TournamentController }