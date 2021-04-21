const axios = require('axios')

let BaseURL = "https://islamic-api-indonesia.herokuapp.com"

class HadistController {
  static getHadist(req, res, next) {
    let kitab = req.body.kitab || "muslim" //Bukhari, Ahmad, Muslim, abu-daud, darimi, ibnu-majah, nasai, malik
    let number = req.body.number || 1

    axios
    .get(`${BaseURL}/api/data/hadith?kitab=${kitab}&nomor=${number}`)
    .then((response) => {
      // console.log(response.data.result.data.id, "<<<<<< Kitab");
      // console.log(response.data.result.data.contents.number, "<<<<<< Number Hadist");
      res.status(200).json(
        response.data.result.data
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