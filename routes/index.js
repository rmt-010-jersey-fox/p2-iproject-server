const router = require('express').Router()
const userRoute = require('./user')


router.get('/', (req,res) => res.send('Running!!'))

router.use('/users', userRoute)

module.exports = router