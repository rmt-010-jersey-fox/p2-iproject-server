const {Playlist} = require('../models')

class PlaylistController {
    static read (req, res, next) {
        Playlist.findAll({})
            .then((data) => {
                const arr = []
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        id: data[i].id,
                        title: data[i].title,
                        source: data[i].source
                    })
                }
                res.status(200).json(arr)
            })
            .catch((err) => {
                next(err)
            })
    }

    static readOne (req, res, next) {
        Playlist.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
            .then((data) => {
                if (data) {
                    res.status(200).json({
                        id: data.id,
                        title: data.title,
                        source: data.source
                    })
                } else {
                    next({
                        status: 404,
                        message: 'data not found'
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = PlaylistController