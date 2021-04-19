const router = require('express').Router()
const API = require('../controllers/api')

router.get('/playlist', API.getPlaylist)
router.get('/lyrics', API.getLyrics)

module.exports = router