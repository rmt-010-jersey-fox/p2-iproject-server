const {Transaction} = require('../models')

class TransactionController {
    static create (req, res, next) {
        const CustomerId = req.currentUser.id
        const {CarId, start_date, end_date, location} = req.body
        Transaction.create({CustomerId, CarId, start_date, end_date, location})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = TransactionController