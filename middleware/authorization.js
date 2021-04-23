const { Book } = require('../models');

function authorization(req, res, next) {
    Book.findOne({
        where: {
            id: req.params.id,
            UserId: req.loggedUser.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(401).json({ message: "Unauthorized" })
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
}

module.exports = authorization