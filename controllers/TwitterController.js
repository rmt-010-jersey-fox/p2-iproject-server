const { Tournament } = require('../models')
const axios = require('axios');
const author = `Bearer ${process.env.BEARER_TOKEN_TWITTER}`

class TwitterController{
  static getTwitterPerTournament(req, res, next){
    let TournamentId = req.params.id
    Tournament.findOne({ where: { id: TournamentId }})
      .then((data) => {
        let gamecode = data.game
        let nameTournament = data.name
        let username

        if (gamecode === 'ML') {
          username = 'MobileLegendsID'
        } else if (gamecode === 'R6') {
          username = 'Rainbow6Game'
        } else if (gamecode === 'LOL') {
          username = 'LeagueOfLegends'
        } else if (gamecode === 'Dota2') {
          username = 'DOTA2'
        } else {
          username = 'nouser'
        }
      
        if(username !== 'nouser'){
          let UserId
          axios({
            method: 'get',
            url: `https://api.twitter.com/2/users/by?usernames=${username}`,
            headers: {
              Authorization: author
            }
          })
            .then(function (response) {
              UserId = response.data.data[0].id
              return axios({
                method: 'get',
                url: `https://api.twitter.com/2/users/${UserId}/tweets?exclude=retweets,replies`,
                headers: {
                  Authorization: author
                }
              })
            })
            .then((response) => {
              let data = response.data.data
              res.status(200).json({ data })
            })
        } else {
          return axios({
            method: 'get',
            url: `https://api.twitter.com/2/tweets/search/recent?query=${nameTournament}&max_results=10`,
            headers: {
              Authorization: author
            }
          })
          .then((response) => {
            let data = response.data.data
            res.status(200).json({ data })
          })
        }

      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = { TwitterController }