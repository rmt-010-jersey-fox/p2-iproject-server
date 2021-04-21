const { Finance, FinanceDetail } = require('../models')

class FinanceDetailController {
    static async readAll(req, res, next) {
        try {
            const financeDetail = await FinanceDetail.findAll({where: {UserId: req.currentUser.id}, include: Finance})
            res.status(200).json(financeDetail)
        } catch (error) {
            next(error)
        }
    }

    static async detail(req, res, next) {
        try {
            const financeDetail = await FinanceDetail.findAll({
                where: {
                    UserId: req.currentUser.id, 
                    FinanceId: +req.params.financeId
                }, 
                include: Finance,             
                order: [
                    ['id', 'DESC']
                ]})
            res.status(200).json(financeDetail)
        } catch (error) {
            next(error)
        }
    }

    static async create(req, res, next) {
        try {
            const financeId = +req.params.financeId
            const { TransactionsType, date, amount } = req.body
            const create = await FinanceDetail.create({
                TransactionsType, date, amount, UserId: +req.currentUser.id, FinanceId: financeId
            })
            const finance = await Finance.findByPk(financeId)
            if (TransactionsType === 'income') {
                const saldo = Number(finance.saldo) + Number(amount)
                await finance.update({ saldo },{ where : { id: financeId } })
            } else {
                const saldo = Number(finance.saldo) - Number(amount)
                await finance.update({ saldo },{ where : { id: financeId } })
            }
            res.status(201).json(create)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const financeId = +req.params.financeDetailId
            const deleteFinance = await FinanceDetail.destroy({
                where: {id : financeId}
            })
            res.status(200).json({messages: 'Successfuly Delete Transaction in wallet'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = FinanceDetailController