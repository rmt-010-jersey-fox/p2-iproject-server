const express = require('express')
const { PlayerController } = require('../controllers/playerController')
const router = express.Router()

router.get('/:position', PlayerController.findPlayerBasedOnPosition)

module.exports = router