const Controller = require('../controller/Controller.js')
const express = require('express')
const router = express.Router()


router.get('/easy',Controller.getEasy)
router.get('/medium',Controller.getMedium)
router.get('/hard',Controller.getHard)
router.get('/askaudience/:rightAnswer',Controller.askAudience)

module.exports = router