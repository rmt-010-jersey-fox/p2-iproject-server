const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'kofivanilla@gmail.com', //generate ethereal user
    pass: 'Allahuakbar12', //generated ethereal pass
  }
})

const sendMail = (email) => {
  const option = {
    from: '"NutriSum" <kofivanilla@gmail.com>',
    to: email,
    subject: 'Thank you for signing up!',
    text: 'You can search a random recipe and stay healthy😊'
  }

  transporter.sendMail(option, (err,info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`email has been sent!`);
    }
  })
}

module.exports = sendMail;