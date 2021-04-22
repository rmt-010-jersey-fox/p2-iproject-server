const router = require('express').Router()
const user_routes = require('./user_routes/user')
const timeline_routes = require('./timeline_routes/timeline')

router.use(user_routes)
router.use(timeline_routes)

module.exports = router