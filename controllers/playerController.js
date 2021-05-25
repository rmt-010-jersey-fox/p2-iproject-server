const { Player } = require('../models')
const { Club } = require('../models')

class PlayerController {
  static findPlayerBasedOnPosition(req, res, next) {
    const { position } = req.params
    Player.findAll({
      include: [Club],
      where: {
        position
      }
    })
      .then(players => {
        res.status(200).json({
          players
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = { PlayerController }