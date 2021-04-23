const express = require('express')
const mealsRouter = express.Router()
const MealController = require('../controllers/mealsController')

mealsRouter.get('/random', MealController.randomMeal)
mealsRouter.get('/categories', MealController.getCategories)
mealsRouter.get('/categories/:category', MealController.readMealsByCategory)
mealsRouter.get('/search/:name', MealController.searchMeals)

module.exports = mealsRouter

