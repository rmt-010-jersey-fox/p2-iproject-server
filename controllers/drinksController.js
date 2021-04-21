const axios = require('axios')
class DrinkController{

    static randomDrink (req, res, next){
        axios({
            method: 'post',
            url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        })
            .then(response => {
                let data = response.data.drinks[0]
                console.log(data);
                let id = data.idDrink
                let name = data.strDrink
                let category = data.strCategory
                let alcoholic = data.strAlcoholic
                let instructions = data.strInstructions
                let imgUrl = data.strDrinkThumb
                let ingridientsRaw = [ data.strIngredient1,  data.strIngredient2,  data.strIngredient3,  data.strIngredient4,  data.strIngredient5,  data.strIngredient6,  data.strIngredient7,  data.strIngredient8,  data.strIngredient9, data.strIngredient10, data.strIngredient11, data.strIngredient12, data.strIngredient13, data.strIngredient14, data.strIngredient15, data.strIngredient16, data.strIngredient17, data.strIngredient18, data.strIngredient19, data.strIngredient20]
                let ingridients = []

                ingridientsRaw.forEach(el => {
                    if (el){
                        ingridients.push(el)
                    }
                })
                
                res.status(200).json({id, name, category, alcoholic, instructions, imgUrl, ingridients})
            })
            .catch(err => {
                console.log('error');
            })
    }


    static getCategories(req, res, next){
        axios({
            method: 'post',
            url: `http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`,
        })
            .then(data => {
                res.status(200).json(data.data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }


    static readDrinksByCategory(req, res, next){
        let category = req.params.category
        console.log(category);
        axios({
            method: 'post',
            url: `http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail${category}`,
        })
            .then(data => {
                console.log(data.data);
                res.status(200).json(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }



    static searchDrinks(req, res, next){
        let name = req.body.name
        axios({
            method: 'post',
            url: `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${name}`,
        })
            .then(data => {
                console.log(data.data);
                res.status(200).json(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}



module.exports = DrinkController