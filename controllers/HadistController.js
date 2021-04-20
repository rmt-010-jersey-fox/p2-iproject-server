const axios = require('axios')

let BaseURL = "https://islamic-api-indonesia.herokuapp.com"

class HadistController {
  static getHadist(req, res, next) {
    let kitab = req.body.kitab || "muslim" //Bukhari, Ahmad, Muslim, abu-daud, darimi, ibnu-majah, nasai, malik
    let nomor = req.body.nomor || 1

    axios
    .get(`${BaseURL}/api/data/hadith?kitab=${kitab}&nomor=${nomor}`)
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) => {
      next(err);
    })
  }
}

module.exports = HadistController