const { Tournament } = require('../models')
const axios = require('axios');
const author = `Bearer ${process.env.BEARER_TOKEN_TWITTER}`

class TwitterController{
  static getTwitterPerTournament(req, res, next){
    let TournamentId = req.params.id
    Tournament.findOne({ where: { id: TournamentId }})
      .then((data) => {
        let nameTournament = data.name
        let game = data.game
        let twitter = {}
          return axios({
            method: 'get',
            url: `https://api.twitter.com/2/tweets/search/recent?query=${nameTournament}&max_results=10`,
            headers: {
              Authorization: author
            }
          })
          .then((response) => {
            twitter = response.data
            let appid
            if (game === 'R6'){
              appid = 359550
            } else if (game === 'DOTA2') {
              appid = 570
            } else if (game === 'PUBG') {
              appid = 578080
            } else if (game === 'APEX') {
              appid = 1172470
            }
            return axios({
              method: 'get',
              url: `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=3&format=JSON`,
              headers: {
                Authorization: author
              }
            })
          })
          .then((response) => {
            let steamnews = response.data
            let data = {
              twitter,
              steamnews
            }
            res.status(200).json({ data })
          })
          .catch((err) => {
            next(err)

          })
      })
  }
}

module.exports = { TwitterController }