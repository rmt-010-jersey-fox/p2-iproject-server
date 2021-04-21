const axios = require('axios');
const { Quran } = require('../models')

let BaseURL = "https://api.quran.sutanlab.id";

class QuranFavController {
  static postFavQuran(req, res, next) {
    let dataInput = {
      SurahId: req.params.SurahId,
      UserId: req.loggedUser.id
    }

    Quran.create(dataInput)
    .then((dataNew) => {
      res.status(201).json(dataNew)
    })
    .catch((err) => {
      console.log(err);
    })

  }

  static getFavQuran(req, res, next) {
    let SurahId = req.params.SurahId

    axios
    .get(`${BaseURL}/surah/${SurahId}`)
    .then((response) => {
      res.status(200).json(response.data.data)
    })
    .catch((err) => {
      next(err);
    })

  }
}


module.exports = QuranFavController