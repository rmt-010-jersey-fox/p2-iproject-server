const express = require('express');
const { authenticate, authorizeWishlist } = require('../middlewares/auth-middleware');
const WishlistController = require('../controllers/wishlistController')
const router = express.Router();

router.use(authenticate)

router.get('/', WishlistController.findAll)
router.post('/:id', WishlistController.create)
router.delete('/:id', authorizeWishlist, WishlistController.delete)

module.exports = router