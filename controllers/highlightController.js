const axios = require('axios')

class HighlightController {
  static getVideo(req, res, next) {
    axios({
      url: 'https://www.scorebat.com/video-api/v1/',
      method: 'GET'
    })
      .then(({ data }) => {
        const highlights = data.filter(e => e.competition.name === 'ENGLAND: Premier League')
        res.status(200).json(highlights)
        // console.log(data.data);
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = { HighlightController }