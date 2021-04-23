const router = require('express').Router()
const userRoutes = require('./user-route')
const vacationRoute = require('./vacation-route')
const destinationRoute = require('./destination-route')

router.get('/', (req, res) => {
  res.send('hai, hallooo')
})

router.use(userRoutes)

router.use(vacationRoute)
router.use(destinationRoute)

module.exports = router