const express = require('express')
const router = express.Router()
const routerCustomer = require('./customer')

router.use(routerCustomer)

module.exports = router