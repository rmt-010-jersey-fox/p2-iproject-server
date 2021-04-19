const { UsersTeam } = require('../models')

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
    
  }

  static editSquad(req, res, next) {
    
  }

  static changePlayer(req, res, next) {
    
  }

  static deleteSquad(req, res, next) {
    
  }
}

module.exports = { MySquadController }