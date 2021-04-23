const { Pet } = require("../models")

async function authorization(req, res, next) {
    try {

        let id = req.params.id
        const pet = await Pet.findByPk(id)

        if (!pet) {
            res.status(404).json({ msg: "Todo Not Found" })
        } else {
            if (pet.userId !== req.loggedUser.id) {
                res.status(401).json({ msg: "Authorization Failed" })
            } else {
                next()
            }
        }
    } catch (error) {
        res.status(401).json({ msg: "Authorization Failed" })
    }
}

module.exports = authorization