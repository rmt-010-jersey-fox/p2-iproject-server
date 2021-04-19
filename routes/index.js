const router = require('express').Router()
const bracket = require('./bracket')
const team = require('./team')
const tournament = require('./tournament')
const user = require('./user')

router.use('/', user)
router.use('/tournament', tournament)
router.use('/team', team)
router.use('/bracket', bracket)

module.exports = router