const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'diamontaufik@gmail.com', // generated ethereal user
    pass:  process.env.PASSWORD// generated ethereal password
  },
});

const sendMail = (email) => {
  const option = {
    from: 'diamontaufik@gmail.com',
    to: email,
    subject: "Welcome to Anime News",
    text: "Thank you for registering on Anime News"
  }

  transporter.sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('email has been sent!');
    }
  })
}

module.exports = {sendMail}