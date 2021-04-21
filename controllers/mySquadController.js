const { UsersTeam } = require('../models')
const { Player } = require('../models')
const { Club } = require('../models')

class MySquadController {
  static findAll(req, res, next) {
    UsersTeam.findAll({
      include: [Club, Player],
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
    UsersTeam.findOne({
      where: {
        UserId, PlayerId
      }
    })
    .then(resPlayer => {
      if(resPlayer && resPlayer !== null) {
        res.status(400).json({
          message: 'You have already put this player'
        })
      } else {
        return Player.findByPk(PlayerId)
      }
    })
    .then(player => {
      if(!player) {
        res.status(404).json({
          message: 'Player not found'
        })
      } else {
        return UsersTeam.create({
          name: player.name,
          UserId,
          PlayerId: player.id,
          ClubId: player.ClubId
        })
      }
    })
    .then(player => {
      res.status(200).json({
        player
      })
    })
    .catch(err => {
      next(err);
    })
  }

  static changePlayer(req, res, next) {
    const UserId = +req.loggedIn.id
    const PlayerId = +req.params.playerid
    const newPlayerId = +req.body.PlayerId
    UsersTeam.findOne({
      where: {
        UserId, 
        PlayerId: newPlayerId
      }
    })
      .then(resPlayer => {
        if(resPlayer && resPlayer !== null) {
          res.status(400).json({
            message: 'You have already put this player'
          })
        } else {
          return Player.findByPk(newPlayerId)
        }
      })
      .then(newPlayer => {
        // res.status(200).json({
        //   UserId, PlayerId, newPlayerId, newPlayer
        // })
        if(!newPlayer) {
          res.status(404).json({
            message: 'Player not found'
          })
        } else {
          return UsersTeam.update({
            name: newPlayer.name,
            PlayerId: newPlayer.id,
            ClubId: newPlayer.ClubId
          }, {
            where: {
              UserId,
              PlayerId
            }
          })
        }
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static deleteSquad(req, res, next) {
    const id = +req.params.playerid
    UsersTeam.destroy({
      where: {
        PlayerId: id,
        UserId: +req.loggedIn.id
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