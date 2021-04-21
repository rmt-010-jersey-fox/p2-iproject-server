const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/auth')
const FoodController = require('../controllers/FoodController')

router.get('/nutrient', FoodController.getNutrientComplex)
router.get('/recipes', FoodController.getRecipesByNutrient)

module.exports = router;