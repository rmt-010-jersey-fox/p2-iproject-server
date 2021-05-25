const { UsersTeam } = require('../models')

async function authorization(req, res, next) {
    const id = +req.params.playerid
    const UserId = +req.loggedIn.id
    UsersTeam.findOne({
        where: {
            PlayerId: id,
            UserId
        }
    })
    .then(player => {
        if(!player) {
            res.status(404).json({
                msg: 'Player not found'
            }) 
        } else if(player.UserId === UserId) {
            next()
        } else {
            res.status(401).json({
                message: 'Not Authorized'
            })
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

module.exports = { authorization }