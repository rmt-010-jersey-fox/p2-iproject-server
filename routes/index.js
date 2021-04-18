const router = require('express').Router()
const tournament = require('./tournament')
const user = require('./user')

router.use('/', user)

router.use('/tournament', tournament)

module.exports = router