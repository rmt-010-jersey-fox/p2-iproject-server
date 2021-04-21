const nodemailer = require("nodemailer")
const axios = require('axios')
const cron = require('node-cron');
const { User } = require('../models')

function sendEmail () {
  let users = []
  let message = ''
  
  
  axios({
    method: 'post',
    url: `https://www.themealdb.com/api/json/v1/1/random.php`,
  })        
    .then(response => {
      let data = response.data.meals[0]
      let name = data.strMeal
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
      message = message
    })
      .catch(err => {
        next(err)
    })
  
  
  User.findAll() 
    .then(users => {
      users = users.email
    })
  
  
  
  users.forEach(user => {
      //Step 1: Creating the transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "recipes.world22@gmail.com",
        pass: "hacktiv8"
      }
   })
  
    //Step 2: Setting up message options
    const messageOptions = {
    from: "recipes.world22@gmail.com",
    to: user.email,
    subject: "Random Recipes from Recipes world",
    text: `Hello ${user},
   
   
    ${message}
   
    Thank you!`
    }
  
    //Step 3: Sending email
    const task = cron.schedule('* * * * *', () => {
      transporter.sendMail(messageOptions, (err, info) => {
        if(err){
          console.log(err)
        } else {
          console.log('email sent');
        }
      });
    })
  
  })
}


module.exports = sendEmail




// function sendEmail(message, email) {

//   //Step 1: Creating the transporter
//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "recipes.world22@gmail.com",
//       pass: "hacktiv8"
//     }
//   })

//   //Step 2: Setting up message options
//   const messageOptions = {
//   from: "recipes.world22@gmail.com",
//   to: email,
//   subject: "Random Recipes from Recipes world",
//   text: `Hello ${user},
  
  
//   ${message}
  
//   Thank you!`
//   }
// }


