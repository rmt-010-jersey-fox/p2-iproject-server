const router = require('express').Router()
const hospitalRouter = require('./hospital')
const patientRouter = require('./patient')
const scheduleRouter = require('./schedule')

router.use('/patient', patientRouter)
router.use('/hospital', hospitalRouter)
router.use('/schedules', scheduleRouter)
module.exports = router