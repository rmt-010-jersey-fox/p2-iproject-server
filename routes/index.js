const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/showCase', Controller.showCase)
router.get('/globalCase', Controller.worldCaseShow)
router.get('/news', Controller.news)
module.exports = router