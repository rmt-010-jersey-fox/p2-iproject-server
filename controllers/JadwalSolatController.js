const axios = require('axios')

let BaseURL = "https://api.myquran.com/v1/sholat"

class JadwalSolatController {
  static getJadwalSolat(req, res, next) {
    let month = req.body.month || new Date().getMonth() + 1
    let day = req.body.day || new Date().getDate()
    let year = req.body.year || new Date().getFullYear()
    let place = req.body.place || "jakarta"
    // let noPlace = req.body.noPlace || 1301

    axios.get(`https://api.myquran.com/v1/sholat/kota/cari/${place}`)
    .then((data) => {
      // res.status(200).json(+data.data.data[0].id)
      let idPlace = +data.data.data[0].id

      return axios.get(`${BaseURL}/jadwal/${idPlace}/${year}/${month}/${day}`)
    })
    .then((data) => {
      res.status(200).json(data.data)
    })
    .catch((err) => {
      next(err)
    })
  }

  static getJadwalSolatUp(req, res, next) {
    let month = new Date().getMonth() + 1
    let day = new Date().getDate()
    let year = new Date().getFullYear()
    let place = "jakarta"
    // let noPlace = req.body.noPlace || 1301

    axios.get(`https://api.myquran.com/v1/sholat/kota/cari/${place}`)
    .then((data) => {
      // res.status(200).json(+data.data.data[0].id)
      let idPlace = +data.data.data[0].id

      return axios.get(`${BaseURL}/jadwal/${idPlace}/${year}/${month}/${day}`)
    })
    .then((data) => {
      res.status(200).json(data.data)
    })
    .catch((err) => {
      next(err)
    })
  }
}

module.exports = JadwalSolatController