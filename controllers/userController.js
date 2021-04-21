const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const sendMail = require('../helpers/nodeMailer')
const axios = require('axios')

class UserController {
    static register(req, res, next){
        let {name, email, password} = req.body
        User.create({name, email, password})
            .then(user => {
                return axios({
                    method: 'post',
                    url: `https://www.themealdb.com/api/json/v1/1/random.php`,
                })
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

                const message = `
                name: ${name},
                category: ${category},
                ingridients: ${ingridients}
                instructions: ${instructions}
                `
                sendMail(name, email, message)
                res.status(200).json({id, name, category, area, imgUrl, instructions, ingridients })
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next){
        console.log('login');
        let {email, password} = req.body
        User.findOne({where: {email}})
            .then(user => {
                if(!user){
                    next({name: 'invalid email or password'})
                    console.log('salah 1');
                } else {
                    console.log(password)
                    console.log(user.password)
                    const isMatched = comparePassword(password, user.password)
                    if (!isMatched) {
                        next({name: 'invalid email or password'})
                        console.log('salah 2');
                    } else {
                        const token = generateToken({
                            id: user.id, 
                            name: user.name, 
                            email: user.email
                        })
                        res.status(200).json({
                            id: user.id, 
                            name: user.name, 
                            email: user.email,
                            token: token
                        })
                    }
                }
            })
            .catch(err => {
                console.log('salah 3')
                console.log('----')
                console.log(err)
                next(err)
            })
    }
}

module.exports = UserController