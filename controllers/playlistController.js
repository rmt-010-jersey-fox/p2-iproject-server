const { Playlist, Song, PlaylistSong } = require('../models')

class PlaylistController {
    static async createPlaylist(req, res, next) {
        try {
            const newPlaylist = {
                UserId: req.currentUser.id,
                name: req.body.name,
                cover: req.body.cover
            }
            let playlist = await Playlist.create(newPlaylist)
                res.status(201).json(playlist)
        } catch (err) {
            next(err)
        }
    }

    static async findAll(req, res, next) {
        try {
            const playlist = await Playlist.findAll({
                where: {
                    UserId : req.currentUser.id
                },
                include: [{
                    model: Song,
                    as: 'songs',
                    required: false,
                    attributes: ['track_title', 'artist', 'album_title'],
                    through: { attributes: [] }
                }]
            })
                res.status(200).json(playlist)
        } catch (err) {
            next(err)
        }
    }

    static async addToPlaylist (req, res, next) {
        let SongId = req.params.SongId
        let playlist = await Playlist.findOne({
            where: {
                name: req.body.name,
                UserId: req.currentUser.id
            }
        })
        let PlaylistId = playlist.id
        PlaylistSong.create({ SongId, PlaylistId })
        .then(playlist => {
            res.status(201).json(playlist)
        })
        .catch(err => {
            next(err)
        })
    }

    static async findOne(req, res, next) {
        try {
            let id = req.params.id
            let playlist = await Playlist.findByPk(id)
            if (!playlist) {
                throw {
                    name: "NotFound",
                    status: 404,
                    message: "Playlist Not Found"
                }
            } else {
                res.status(200).json(playlist)
            }
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id
            let playlist = await Playlist.findByPk(id)
            if (!playlist) {
                throw {
                    name: "NotFound",
                    status: 404,
                    message: "Playlist Not Found"
                }
            } else {
                await playlist.destroy()
                res.status(200).json({message: "Playlist Successfully Deleted"})
            }
        } catch (err) {
            next(err)
        }
    }
    
}

module.exports = PlaylistController