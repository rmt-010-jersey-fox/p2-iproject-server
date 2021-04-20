const axios = require('axios')

class ScheduleController {
  static getMatches(req, res, next) {
    const gameWeek = +req.params.id
    axios({
      url: `https://api.football-data.org/v2/competitions/PL/matches?matchday=${gameWeek}`,
      method: 'GET',
      headers: {
        "X-Auth-Token": 'e4a84f41e3b445b68296902178b56063'
      } 
    })
      .then(({ data }) => {
        const matches = []
        const sumMatches = data.matches.length
        data.matches.forEach(e => {
          matches.push({
            date: e.utcDate,
            homeTeam: e.homeTeam.name,
            awayTeam: e.awayTeam.name
          })
        })
        console.log(matches, '<<<<<');
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

