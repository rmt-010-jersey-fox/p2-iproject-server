const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/auth')

const UserRoute = require('./user')
const FavRoute = require('./favorite')
router.use('/',UserRoute)
router.use(authenticate)
router.use('/',FavRoute)


module.exports = router;