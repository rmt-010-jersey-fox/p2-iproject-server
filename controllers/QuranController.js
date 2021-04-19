const axios = require("axios");

let link = "https://api.quran.sutanlab.id";

class QuranController {
  static getQuran(req, res, next) {
    axios
      .get(`${link}/surah/${surah}/${ayat}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = QuranController;
