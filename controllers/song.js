const {Song} = require('../models')

class SongController {
    static read (req, res, next) {
        Song.findAll({})
            .then((data) => {
                const arr = []
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        id: data[i].id,
                        title: data[i].title,
                        source: data[i].source,
                        artist: data[i].artist,
                        release_year: data[i].release_year,
                        country: data[i].country
                    })
                }
                res.status(200).json(arr)
            })
            .catch((err) => {
                next(err)
            })
    }

    static readOne (req, res, next) {
        Song.findOne({
            where: {
                id: Number(req.params.id)
            }
        })
            .then((data) => {
                if (data) {
                    res.status(200).json({
                        id: data.id,
                        title: data.title,
                        source: data.source,
                        artist: data.artist,
                        release_year: data.release_year,
                        country: data.country
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

module.exports = SongController