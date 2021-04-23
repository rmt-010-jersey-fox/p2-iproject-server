const { Finance } = require('../models')

async function authorizeFinance(req, res, next) {
    try {
        const id = +req.params.financeId
        const foundFinance = await Finance.findByPk(id)
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

module.exports = { authorizeFinance }