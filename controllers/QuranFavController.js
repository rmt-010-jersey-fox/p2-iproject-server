const axios = require('axios');
const { Quran } = require('../models')

let BaseURL = "https://api.quran.sutanlab.id"

class QuranFavController {
  static postFavQuran(req, res, next) {
    let dataInput = {
      SurahId: req.body.SurahId,
      UserId: req.loggedUser.id,
      surahName: req.body.surahName,
      surahArti: req.body.surahArti,
      surahJenis: req.body.surahJenis,
      surahAyat: req.body.surahAyat
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
      // console.log(favData)
      res.status(200).json(favData)
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