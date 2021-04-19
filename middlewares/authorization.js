const { UsersTeam } = require('../models')

async function authorization(req, res, next) {
    try {
        const id = +req.params.id
        const player = await UsersTeam.findByPk(id)
        if(!player) {
            res.status(404).json({
                msg: 'Player not found'
            }) 
        } else if(player.UserId === req.loggedIn.id) {
            next()
        } else {
            res.status(401).json({
                message: 'Not Authorized'
            })
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { authorization }