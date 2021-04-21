const express = require('express')
const PlaylistController = require('../controllers/playlistController')
const { authorizeByName, authorizeById } = require('../middlewares/auhorization')
const playlistRouter = express.Router()

playlistRouter.post('/playlist', PlaylistController.createPlaylist)
playlistRouter.get('/playlist', PlaylistController.findAll)

playlistRouter.put('/playlist/:SongId', authorizeByName, PlaylistController.addToPlaylist)
playlistRouter.get('/playlist/:id', authorizeById, PlaylistController.findOne)
playlistRouter.delete('/playlist/:id', authorizeById, PlaylistController.delete)

module.exports = playlistRouter