const { Song } = require('../models')

class SongController {
    static async findAll(req, res, next) {
        try {
            const songsData = await Song.findAll()
            if (songsData) {
                res.status(200).json(songsData)
            } else {
                throw {
                    name: "NotFound",
                    status: 404,
                    message: "Data Not Found"
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async create(req, res, next) {
        try {
            const newSong = {
                track_title: req.body.track_title,
                artist: req.body.artist,
                album_title: req.body.album_title,
            }
            let song = await Song.create(newSong)
            res.status(201).json(song)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = SongController