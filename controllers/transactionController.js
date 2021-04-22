const {Transaction} = require('../models')
const sendMail = require('../helpers/gmailApi')

class TransactionController {
    static create (req, res, next) {
        const CustomerId = req.currentUser.id
        const {CarId, start_date, end_date, location} = req.body
        Transaction.create({CustomerId, CarId, start_date, end_date, location})
        .then(data => {
            // res.status(200).json(data)
            sendMail(req.currentUser.email, obj)
            .then(result => {
                console.log('Email sent .....', result);
                res.status(201).json(data)
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = TransactionController