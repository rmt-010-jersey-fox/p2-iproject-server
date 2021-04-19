const { FinanceDetail } = require('../models')
const { User } = require('../models')
const { Finance } = require('../models')

class FinanceDetailsController {
    static readAll(req, res, next) {
        Finance.findAll()
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                next(err)
            })
    }

    static findByUser(req, res, next) {
        Finance.findAll({where: {UserId: +req.currentUser.id}})
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                next(err)
            })
    }

    // static detail(req, res, next) {
    //     Finance.findByPk(+req.params.id)
    //         .then(response => {
    //             res.status(201).json(response)
    //         })
    //         .catch(err => {
    //             next(err)
    //         })
    // }
    static create(req, res, next) {
        const { name, saldo } = req.body
        Finance.create({
            name, saldo, UserId: +req.currentUser.id
        })
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = FinanceDetailsController