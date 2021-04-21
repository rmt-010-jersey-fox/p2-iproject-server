const axios = require('axios');
const { Quran } = require('../models')

let BaseURL = "https://api.quran.sutanlab.id"

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

    Quran.findAll({
      where: { UserId: req.loggedUser.id},
    })
    .then((favData) => {
      console.log(favData);
      favData.forEach((e) => {
        return axios({
          method: 'GET',
          url: `https://api.quran.sutanlab.id/surah/${e.SurahId}`
        })
          .then((response) => {
            // console.log(response.data.data, "<<<<<<< ININININI");
            res.status(200).json({
              SurahId : response.data.data.number,
              surahName : response.data.data.name.transliteration.id,
              surahArti : response.data.data.name.translation.id,
              surahAyat : response.data.data.numberOfVerses,
              surahJenis : response.data.data.revelation.id
            })
          })
          .catch((err) => {console.log(err)})
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  static deleteFavQuran(req, res, next) {
    let id = +req.params.id

    Quran.destroy({
      where: {id: id},
    })
    .then((delFavorite) => {
      if (!delFavorite) {
        throw { name: "NotFound"}
      } else {
        res.status(200).json({ message: "Favorite Surah success to delete" });
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


module.exports = QuranFavController