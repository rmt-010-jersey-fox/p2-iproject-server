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
}

module.exports = { BracketController }