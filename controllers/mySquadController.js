const { UsersTeam } = require('../models')
const { Player } = require('../models')

class MySquadController {
  static findAll(req, res, next) {
    UsersTeam.findAll({
      where: {
        UserId: req.loggedIn.id
      }
    })
      .then(squad => {
        res.status(200).json(squad)
      })
      .catch(err => {
        next(err)
      })
  }

  static addSquad(req, res, next) {
    const UserId = +req.loggedIn.id
    const PlayerId = +req.params.playerid
    Player.findByPk(PlayerId)
    .then(player => {
      if(!player) {
        res.status(404).json({
          message: 'Player not found'
        })
      } else {
        return UsersTeam.create({
          name: player.name,
          UserId,
          PlayerId: player.id
        })
      }
    })
    .then(player => {
      res.status(200).json({
        player
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  static deleteSquad(req, res, next) {
    const id = +req.params.id
    UsersTeam.destroy({
      where: {
        id
      }
    })
    .then(() => {
      res.status(200).json({
        message: 'Player is successfully delete from your squad'
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = { MySquadController }