const express = require('express')
const router = express.Router()
const { authenticate,authorize } = require('../middlewares/auth')
const FavController = require('../controllers/FavController')

router.use(authenticate)
router.get('/nutrient', FavController.getNutrientComplex)
router.get('/recipes', FavController.getRecipesByNutrient)
router.get('/random', FavController.getRandomMeal)

module.exports = router;