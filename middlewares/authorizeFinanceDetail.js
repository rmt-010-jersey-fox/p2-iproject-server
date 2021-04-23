const { FinanceDetail } = require('../models')

async function authorizeFinanceDetail(req, res, next) {
    try {
        const id = +req.params.financeDetailId
        const foundFinance = await FinanceDetail.findOne({where: {id: id}})
        if (foundFinance) {
            if (foundFinance.UserId === req.currentUser.id) {
                next()
            } else {
                next({ name: 'Unauthorized' })
            }
        } else {
            next({ name: 'FinanceNotFound'})
        }
    } catch(err) {
        next(err)
    }
}

module.exports = { authorizeFinanceDetail }