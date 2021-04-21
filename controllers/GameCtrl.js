const axios = require ('axios')

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

}

module.exports = GameCtrl