const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/auth')

const UserRoute = require('./user')
const FoodRoute = require('./food')
router.use('/',UserRoute)
router.use(authenticate)
router.use('/',FoodRoute)


module.exports = router;