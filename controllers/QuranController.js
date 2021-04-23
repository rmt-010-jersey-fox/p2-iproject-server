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
        res.status(200).json(response.data.data);
      })
      .catch((err) => {
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
      let data = []
      response.data.data.forEach((e) => {
        data.push({
          SurahId : e.number,
          surahName : e.name.transliteration.id,
          surahArti : e.name.translation.id,
          surahAyat : e.numberOfVerses,
          surahJenis : e.revelation.id
        })
      })
      res.status(200).json(data)
    })
    .catch((err) => {
      next(err);
    })
  }
}

module.exports = QuranController;
