const axios = require('axios')

class ScheduleController {
  static getMatches(req, res, next) {
    const gameWeek = +req.params.id
    axios({
      url: `https://api.football-data.org/v2/competitions/PL/matches?matchday=${gameWeek}`,
      method: 'GET',
      headers: {
        "X-Auth-Token": process.env.API_FOOTBALLDATA
      } 
    })
      .then(({ data }) => {
        const matches = []
        data.matches.forEach(e => {
          matches.push({
            date: e.utcDate,
            status: e.status,
            homeTeam: e.homeTeam.name,
            homeTeamScore: e.score.fullTime.homeTeam,
            awayTeam: e.awayTeam.name,
            awayTeamScore: e.score.fullTime.awayTeam
          })
        })
        res.status(200).json({
          matches
        })
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = { ScheduleController }

