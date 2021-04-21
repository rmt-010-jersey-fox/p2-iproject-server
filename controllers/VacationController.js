const { Vacation, User } = require('../models/index')
const axios = require('axios')

class VacationController {
  static async getVacation(req, res, next) {
    try {
      let data = await Vacation.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async postVacation(req, res, next) {
    try {
      const { start_date, end_date, city } = req.body
      const dataCity = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${city}&inputtype=textquery&fields=photos,name,geometry&key=${process.env.API_KEY}`)
      // console.log(dataCity.data, '<<<<dats');
      const lat = dataCity.data.candidates[0].geometry.location.lat
      const lng = dataCity.data.candidates[0].geometry.location.lng
      const fotoString = dataCity.data.candidates[0].photos[0].photo_reference
      // const photoRef = await axios.get(`https://maps.googleapis.com/maps/api/place/photo?photoreference=${fotoString}&maxheight=1600&key=${process.env.API_KEY}`)
      // console.log(fotoString, '<foto');
      // console.log(photoRef, '<poto');
      const data = await Vacation.create({
        start_date,
        end_date,
        city,
        lat,
        lng,
        photo_reference: fotoString,
        userId: req.user.id
      })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async editVacation(req, res, next) {
    try {
      const { start_date, end_date } = req.body
      let data = await Vacation.update({ start_date, end_date }, {
        where: {
          id: req.params.id
        },
        returning: true
      })
      // console.log(data, '<<<<<<<<<<<<dota');
      res.status(200).json(data)
    } catch (error) {
      // console.log(error, '<<<<<<<errs');
      next(error)
    }
  }

  static async destroyVacation(req, res, next) {
    try {
      await Vacation.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ message: "vacation's deleted" })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = VacationController