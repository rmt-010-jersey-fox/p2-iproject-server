const { Playlist } = require('../models')

async function authorizeByName(req, res, next) {
    try {
        const playlist = await Playlist.findOne({
            where: {
                name: req.body.name
            }
        })
        if (playlist) {
            if (playlist.UserId === req.currentUser.id) {
                next()
            } else {
                throw {
                    status: 401,
                    message: "Unauthorized"
                }    
            }
        } else {
            throw {
                status: 401,
                message: "Unauthorized"
            }
        }
    } catch (err) {
        next(err)
    }
}

async function authorizeById(req, res, next) {
    try {
        const id = req.params.id
        const playlist = await Playlist.findByPk(id)
        if (playlist) {
            if (playlist.UserId === req.currentUser.id) {
                next()
            } else {
                throw {
                    status: 401,
                    message: "Unauthorized"
                }    
            }
        } else {
            throw {
                status: 401,
                message: "Unauthorized"
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { authorizeByName, authorizeById }