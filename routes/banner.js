const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth-middleware')
const BannerController = require('../controllers/bannerController');
const router = express.Router()

router.get('/', BannerController.getActive)
router.use(authenticate)
router.post('/', authorize, BannerController.create)
router.get('/all', authorize, BannerController.findAll)
router.get('/:id', authorize, BannerController.detail)
router.put('/:id', authorize, BannerController.update)
router.patch('/:id', authorize, BannerController.updateStatus)
router.delete('/:id', authorize, BannerController.delete)

module.exports = router