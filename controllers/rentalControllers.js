const {Rental, Car} = require('../models')

class RentalController {
    static getRentals(req, res, next) {
        console.log(req.body, 'ini req body');
        console.log(req.params);
        let address = req.body.address
        Rental.findAll({where: {address}, include: Car})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = RentalController