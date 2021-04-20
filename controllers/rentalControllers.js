const {Rental} = require('../models')

class RentalController {
    static getRentals(req, res, next) {
        Rental.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = RentalController