const { Waste, UserWaste } = require('../models')
const send = require('../helpers/nodeMailer')

class WasteController {
    static getWaste (req, res, next) {
        Waste.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static getSaldo (req, res, next) {
        const UserId = +req.loggedUser.id
        UserWaste.findAll({where: {UserId}, include: Waste})
            .then(data => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({name: 'bad request', message: 'You havent deposit anything'})
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static postSaldo (req, res, next) {
        const UserId = +req.loggedUser.id
        const WasteId = +req.body.WasteId
        const quantity = +req.body.quantity
        UserWaste.findOne({where: {UserId, WasteId, status: 'Undeposited'}})
            .then(data => {
                if (!data) {
                    return UserWaste.create({WasteId, UserId, quantity})
                } else {
                    return UserWaste.update({quantity: data.quantity + quantity}, {where: {UserId, WasteId, status: 'Undeposited'}})
                }
            })
            .then(data => {
                res.status(200).json({message: 'successfully added'})
            })
            .catch(err => {
                next(err)
            })
    }

    static patchQuantity (req, res, next) {
        const UserId = +req.loggedUser.id
        const WasteId = +req.params.WasteId
        const quantity = +req.body.quantity
        UserWaste.findOne({where: {UserId, WasteId, status: 'Undeposited'}})
            .then(data => {
                return UserWaste.update({quantity: data.quantity + quantity}, {where: {UserId, WasteId, status: 'Undeposited'}, returning: true})
            })
            .then(data => {
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                next(err)
            })
    }

    static deposit (req, res, next) {
        const UserId = +req.loggedUser.id
        const emailUser = req.loggedUser.email
        let saldo = 0
        UserWaste.findAll({where: {UserId, status: 'Undeposited'}, include: Waste})
            .then(data => {
                data.forEach(el => {
                    el.status = 'Deposited'
                    saldo = saldo + (el.quantity * el.Waste.price)
                    el.save()
                })
                let text = `This is your latest deposit amount Rp. ${saldo},-`
                send(emailUser, text)
                res.status(200).json({message: 'Your waste has been deposited'})
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteWaste (req, res, next) {
        const UserId = +req.loggedUser.id
        const WasteId = +req.params.WasteId
        UserWaste.destroy({where: {UserId, WasteId, status: 'Undeposited'}})
            .then(data => {
                res.status(200).json({message: 'waste has been deleted'})
            })
            .catch(err => {
                console.log(err);
                next(err)
            })
    }
}

module.exports = WasteController