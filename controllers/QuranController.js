const axios = require("axios");

let link = "https://api.quran.sutanlab.id";

class QuranController {
  static getQuran(req, res, next) {
    let surah = req.body.surah
    let ayat = req.body.ayat
    axios
      .get(`${link}/surah/${surah}/${ayat}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        console.log(err.response, "<< INI");
        console.log(err.response.data, "<< Keterangan");
        if (err.response.status === 404) {
          res.status(404).json(err.response.data)
        } else {
          next(err);
        }
      });
  }
}

module.exports = QuranController;
