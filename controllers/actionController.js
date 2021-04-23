const {Action} = require('../models')

class ActionController {
    static showAll (req, res, next) {
        Action.findAll()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err=> {
            next(err)
        })
    }
}

module.exports = ActionController