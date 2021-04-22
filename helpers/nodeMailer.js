const nodemailer = require("nodemailer")

function sendEmail(user, email, message) {

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
  subject: "Random Recipes from Recipes world",
  text: `Hello ${user},
  
  
  ${message}`,
  to: email,
  from: "recipes.world22@gmail.com"
  }

  //Step 3: Sending email
  transporter.sendMail(messageOptions);
}

module.exports = sendEmail