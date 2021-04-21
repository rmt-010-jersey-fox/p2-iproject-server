const axios = require("axios");

let BaseURL = "https://api.quran.sutanlab.id";

class QuranController {
  static getQuranbyAyat(req, res, next) {
    console.log(req.body, "<<<<< Server")
    let surah = req.body.surah || ""
    let ayat = req.body.ayat || ""
    axios
      .get(`${BaseURL}/surah/${surah}/${ayat}`)
      .then((response) => {
        // console.log(response.data.data.surah.number, "<<<<< Nomer Surah");
        // console.log(response.data.data.number.inSurah, "<<<<< Nomer Ayat");
        res.status(200).json(response.data.data);
      })
      .catch((err) => {
        // console.log(err.response, "<< INI");
        // console.log(err.response.data, "<< Keterangan");
        if (err.response.status === 404) {
          res.status(404).json(err.response.data)
        } else {
          next(err);
        }
      });
  }

  static allSurah(req, res, next) {
    axios
    .get(`${BaseURL}/surah`)
    .then((response) => {
      res.status(200).json(response.data.data)
    })
    .catch((err) => {
      next(err);
    })
  }
}

module.exports = QuranController;
