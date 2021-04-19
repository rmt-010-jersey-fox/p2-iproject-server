const nextpos = require('../helpers/nextPost')
const { Tournament, User, Team, Bracket } = require('../models')

class BracketController{
  static addTeamtoBracket(req, res, next) {
    let teams
    Team.findAll({ where: { TournamentId: req.loggedUser.TournamentId }, order: [['id', 'ASC']]})
      .then((data) => {
        teams = data
        if(data.length !== 8) {
          throw { name: 'notenoughteam' }
        }
        for(let i = 0; i < teams.length; i++){
          let input = {
            TeamId: teams[i].id,
            position: i+1,
            TournamentId: req.loggedUser.TournamentId
          }
          Bracket.create(input)
            .then((data) => { 
              if(data.position == 8){
                Bracket.findAll({ where: { TournamentId: req.loggedUser.TournamentId }, include: Team, order: [['position', 'ASC']] })
                  .then((data) =>  {
                    res.status(201).json(data)
                  })
              } 
            })
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static editScoreBracket(req, res, next) {
    let id = req.params.id
    let score = req.body.score
    Bracket.update({ score }, { where: { id }, returning: true })
      .then((data) => {
        if(data[0] == 1){
          res.status(200).json(data[1][0])
        } else {
          throw { name: 'error' }
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static addWinnertoNextBracket(req, res, next) {
    let winnerId = +req.params.id
    let input
    Bracket.findOne({ where: { id: winnerId }})
      .then((data) => {
        let winnerPost = data.position
        let nextposition = nextpos(winnerPost)
        input = {
          TeamId: data.TeamId,
          position: nextposition,
          TournamentId: data.TournamentId,
          score: data.score
        }
        return Bracket.findOne({ where: { TournamentId: data.TournamentId, position: nextposition }})
      })
      .then((data) => {
        if(data){
          throw { name: 'alreadyadvanced' }
        } else {
          return Bracket.create(input)
        }
      })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { BracketController }