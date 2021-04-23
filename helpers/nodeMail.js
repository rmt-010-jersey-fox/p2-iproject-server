const nodemailer = require('nodemailer')

module.exports = function sendEmail(email) {
  let transporter = nodemailer.createTransport({
    service: process.env.SECRET_SERVICE,
    auth: {
      user: process.env.SECRET_EMAIL,
      pass: process.env.SECRET_PASS
    }
  })

  let mailOptions = {
    from: process.env.SECRET_EMAIL,
    to: email,
    subject: 'Registration Success',
    text: `Terimakasih telah bergabung dengan Qurantara! Selamat memanfaatkan semua fitur`
  }

  return transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err)
    console.log(`Email sent: ${email}` + info.response)
  })
}