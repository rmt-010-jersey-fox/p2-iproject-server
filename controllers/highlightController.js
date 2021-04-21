const axios = require('axios')

class HighlightController {
  static getVideo(req, res, next) {
    axios({
      url: 'https://www.scorebat.com/video-api/v1/',
      method: 'GET'
    })
      .then(({ data }) => {
        const highlights = data.filter(e => e.competition.name === 'ENGLAND: Premier League')
        const highlightArr = []
        highlights.forEach(e => {
          highlightArr.push({
            title: e.title,
            link: e.videos[0].embed
          })
        })
        res.status(200).json(highlightArr)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = { HighlightController }