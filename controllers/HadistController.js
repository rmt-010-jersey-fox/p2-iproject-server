const axios = require('axios')

let BaseURL = "https://islamic-api-indonesia.herokuapp.com"

class HadistController {
  static getHadist(req, res, next) {
    let kitab = req.body.kitab  //Bukhari, Ahmad, Muslim, abu-daud, darimi, ibnu-majah, nasai, malik
    let nomor = req.body.nomor

    axios
    .get(`${BaseURL}/api/data/hadith?kitab=${kitab}&nomor=${nomor}`)
    .then((response) => {
      res.status(200).json(
        response.data
      //   {
      //     kitab: response.data.result.data.id,
      //     data: response.data.result.data.contents
      //   }
      )
    })
    .catch((err) => {
      next(err);
    })
  }
}

module.exports = HadistController