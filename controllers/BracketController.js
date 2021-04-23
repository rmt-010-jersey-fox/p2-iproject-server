const nextpos = require('../helpers/nextPost')
const { Tournament, User, Team, Bracket } = require('../models')

class BracketController{
  static addTeamtoBracket(req, res, next) {
    let teams
    Bracket.findOne({ where: { TournamentId: req.loggedUser.TournamentId } })
      .then((data) => {
        if(data) {
          throw { name: 'havebracket' }
        } else {
          return Team.findAll({ where: { TournamentId: req.loggedUser.TournamentId }, order: [['id', 'ASC']]})
        }
      })
      .then((data) => {
        teams = data
        if(data.length !== 8) {
          throw { name: 'notenoughteam' }
        } else {
          for(let i = 0; i < 15; i++){
            let input
            if(i < 8) {
              input = {
                TeamId: teams[i].id,
                position: i+1,
                TournamentId: req.loggedUser.TournamentId
              }
            } else {
              input = {
                TeamId: null,
                position: i+1,
                TournamentId: req.loggedUser.TournamentId
              }
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
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static editScoreBracket(req, res, next) {
    let id = req.params.id
    Bracket.findOne({ where: { id }})
      .then((data) => {
        if(data) {
          let beforescore = data.score
          let score = beforescore + 1
          return Bracket.update({ score }, { where: { id }, returning: true })
        }
      })
      .then((data) => {
        if(data[0] == 1){
          res.status(200).json(data[1][0])
        } else {
          throw { name: 'error', message: 'Invalid Server Error' }
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
          TeamId: data.TeamId
        }
        return Bracket.update( { TeamId: data.TeamId }, { where: { TournamentId: data.TournamentId, position: nextposition }, returning: true})
      })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { BracketController }