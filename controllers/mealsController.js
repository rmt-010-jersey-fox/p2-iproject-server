const axios = require('axios')
class MealController{

    static randomMeal(req, res, next){
        axios({
            method: 'post',
            url: `https://www.themealdb.com/api/json/v1/1/random.php`,
        })
            .then(response => {
                let data = response.data.meals[0]
                let id = data.idMeal
                let name = data.strMeal
                let category = data.strCategory
                let area = data.strArea
                let imgUrl = data.strMealThumb
                let instructions = data.strInstructions
                let ingridientsRaw = [`${data.strMeasure1} ${data.strIngredient1}`, `${data.strMeasure2} ${data.strIngredient2}`, `${data.strMeasure3} ${data.strIngredient3}`, `${data.strMeasure4} ${data.strIngredient4}`, `${data.strMeasure5} ${data.strIngredient5}`, `${data.strMeasure6} ${data.strIngredient6}`, `${data.strMeasure7} ${data.strIngredient7}`, `${data.strMeasure8} ${data.strIngredient8}`, `${data.strMeasure9} ${data.strIngredient9}`, `${data.strMeasure10} ${data.strIngredient10}`, `${data.strMeasure11} ${data.strIngredient11}`, `${data.strMeasure12} ${data.strIngredient12}`, `${data.strMeasure13} ${data.strIngredient13}`, `${data.strMeasure14} ${data.strIngredient14}`, `${data.strMeasure15} ${data.strIngredient15}`, `${data.strMeasure16} ${data.strIngredient16}`, `${data.strMeasure17} ${data.strIngredient17}`, `${data.strMeasure18} ${data.strIngredient18}`, `${data.strMeasure19} ${data.strIngredient19}`, `${data.strMeasure20} ${data.strIngredient20}`]
                let ingridients = []
                ingridientsRaw.forEach(el => {
                    if (el.length > 2){
                        ingridients.push(el)
                    }
                })

                res.status(200).json({id, name, category, area, imgUrl, instructions, ingridients })
            })
            .catch(err => {
                console.log(err);
            })
    }

    static getCategories(req, res, next){
        axios({
            method: 'post',
            url: `http://www.themealdb.com/api/json/v1/1/categories.php`,
        })
            .then(data => {
                const categories = data.data.categories
                res.status(200).json(categories)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }


    static readMealsByCategory(req, res, next){
        let category = req.params.category
        console.log(category);
        axios({
            method: 'post',
            url: `http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        })
            .then(data => {
                console.log(data.data);
                res.status(200).json(data.data.meals)
            })
            .catch(err => {
                console.log(err);
            })
    }

    static searchMeals(req, res, next){
        let name = req.params.name
        axios({
            method: 'post',
            url: `http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
        })
            .then(response => {
                // console.log(response.data);
                let data = response.data.meals[0]
                let id = data.idMeal
                let name = data.strMeal
                let category = data.strCategory
                let area = data.strArea
                let imgUrl = data.strMealThumb
                let instructions = data.strInstructions
                let ingridientsRaw = [`${data.strMeasure1} ${data.strIngredient1}`, `${data.strMeasure2} ${data.strIngredient2}`, `${data.strMeasure3} ${data.strIngredient3}`, `${data.strMeasure4} ${data.strIngredient4}`, `${data.strMeasure5} ${data.strIngredient5}`, `${data.strMeasure6} ${data.strIngredient6}`, `${data.strMeasure7} ${data.strIngredient7}`, `${data.strMeasure8} ${data.strIngredient8}`, `${data.strMeasure9} ${data.strIngredient9}`, `${data.strMeasure10} ${data.strIngredient10}`, `${data.strMeasure11} ${data.strIngredient11}`, `${data.strMeasure12} ${data.strIngredient12}`, `${data.strMeasure13} ${data.strIngredient13}`, `${data.strMeasure14} ${data.strIngredient14}`, `${data.strMeasure15} ${data.strIngredient15}`, `${data.strMeasure16} ${data.strIngredient16}`, `${data.strMeasure17} ${data.strIngredient17}`, `${data.strMeasure18} ${data.strIngredient18}`, `${data.strMeasure19} ${data.strIngredient19}`, `${data.strMeasure20} ${data.strIngredient20}`]
                let ingridients = []
                ingridientsRaw.forEach(el => {
                    if (el.length > 2){
                        ingridients.push(el)
                    }
                })

                res.status(200).json({id, name, category, area, imgUrl, instructions, ingridients })
                // res.status(200).json(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = MealController