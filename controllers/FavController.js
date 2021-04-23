const axios = require('axios')

let baseURL = 'https://api.spoonacular.com/recipes/findByNutrients'
let baseURL1 = 'https://api.spoonacular.com/recipes/complexSearch'
let baseURL2 = 'https://api.spoonacular.com/recipes/random'
const apiKey = process.env.apiKey
// ?apiKey=YOUR-API-KEY&includeNutrition=true
class FavController {
  // * including the food menu
  static getRecipesByNutrient (req,res,next) {
    let maxCalories = req.body.maxCalories || 20
    let maxSugar = req.body.maxSugar || 10

    axios
      .get(`${baseURL}?apiKey=${apiKey}&includeNutrition=true?maxCalories=${maxCalories}&maxSugar=${maxSugar}`)
      .then(({data}) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      })
  }

  static getNutrientComplex (req,res,next) {
    let meal = req.body.meal || 'salad'

    axios 
      .get(`${baseURL1}?apiKey=${apiKey}&includeNutrition=true?query=${meal}&addRecipeNutrition=true`)
      .then(({data}) => {
        res.status(200).json(data.results)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      })
  }

  static getRandomMeal (req,res,next) {
    // https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,vegan,diet&apiKey=abb6817fb5984c97821b8fbdd27db3fd
    axios
      .get(`${baseURL2}?number=3&tags=vegetarian,vegan,diet&apiKey=${apiKey}`)
      .then(({data}) => {
        res.status(200).json(data.recipes)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      })
  }
}

module.exports = FavController