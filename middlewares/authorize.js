const { Finance } = require('../models')

async function authorize(req, res, next) {
    try {
        const id = +req.params.id
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

module.exports = { authorize }