const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth-middleware')
const LocationController = require('../controllers/locationController')
const router = express.Router()

router.get('/', LocationController.getActive)
router.use(authenticate)
router.post('/', authorize, LocationController.create)
router.get('/all', authorize, LocationController.findAll)
router.get('/:id', authorize, LocationController.detail)
router.put('/:id', authorize, LocationController.update)
router.put('/:id', authorize, LocationController.updateStatus)
router.delete('/:id', authorize, LocationController.delete)

module.exports = router