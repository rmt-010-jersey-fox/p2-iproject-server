const {Car, Rental} = require('../models')

class CarController {
    static getCars(req, res, next) {
        Car.findAll({include: Rental})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = CarController;