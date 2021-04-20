const {Car} = require('../models')

class CarController {
    static getCars(req, res, next) {
        Car.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = CarController;