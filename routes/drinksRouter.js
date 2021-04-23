const express = require('express')
const drinksRouter = express.Router()
const DrinkController = require('../controllers/drinksController')

drinksRouter.get('/random', DrinkController.randomDrink)
drinksRouter.get('/categories', DrinkController.getCategories)
drinksRouter.get('/categories/:category', DrinkController.readDrinksByCategory)
drinksRouter.get('/search/:name', DrinkController.searchDrinks)

module.exports = drinksRouter
