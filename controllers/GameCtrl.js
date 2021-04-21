const axios = require ('axios')
const { Game } = require('../models')

class GameCtrl {
  
  static showGame (req, res, next) {
    
    axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.AXIOS_CLIENT_ID,
          'Authorization': `Bearer ${process.env.AXIOS_AUTHORIZATION}`
      },
      data: "fields name,cover.url,rating_count,genres.name; limit 40; where rating > 75;"
    })
    .then(({ data }) => {
      console.log(data)
      res.status(200).json({ data })
    })
    .catch(err => next(err))

  }

  static wishlist (req, res, next) {
    const wishlist = {
      name  : req.body.name,
      gameId: req.body.gameId,
      UserId: req.currentUser.id
    }

    Game
      .create({ ...wishlist })
      .then(wishlist => res.status(201).json({ wishlist }))
      .catch(err => next(err))
  }

}

module.exports = GameCtrl