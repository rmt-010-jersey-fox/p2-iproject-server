const { Destination, Vacation } = require('../models')
const axios = require('axios')

class DestinationController {
  static async getListDestination(req, res, next) {
    try {
      let des = await Vacation.findOne({
        where: {
          id: req.params.vacationId
        }
      })
      let position = `${des.lat},${des.lng}`
      console.log(position);
      // console.log(des);
      let listDestination = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position}&radius=50000&type=tourist_attraction&key=${process.env.API_KEY}`)
      console.log(listDestination)
      res.status(200).json(listDestination.data)
    } catch (error) {
      next(error)
    }
  }

  static async postDestination(req, res, next) {
    try {
      let { place_name, lat, lng } = req.body
      let data = await Destination.create({ place_name, lat, lng, vacationId: req.params.vacationId })
      res.status(201).json(data)
    } catch (error) {
      console.log(error, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<wew')
      next(error)
    }
  }

  static async getUserDestination(req, res, next) {
    try {
      let data = await Destination.findAll({
        where: {
          vacationId: req.params.vacationId
        },
        order: [['id', 'ASC']]
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async destroyDestination(req, res, next) {
    try {
      await Destination.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ message: "destination's deleted" })
    } catch (error) {
      next(error)
    }
  }
}

/**
 * `/destinations/${vacationId}`
 */

module.exports = DestinationController