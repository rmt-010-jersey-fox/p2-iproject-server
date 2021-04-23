const router = require('express').Router()
const DestinationController = require('../controllers/DestinationController')
const { authentication } = require('../middlewares/auth')

router.use(authentication)
router.get('/destinations-list/:vacationId', DestinationController.getListDestination)
router.post('/destinations/:vacationId', DestinationController.postDestination)
router.get('/destinations/:vacationId', DestinationController.getUserDestination)
router.delete('/destinations/:id', DestinationController.destroyDestination)

module.exports = router
