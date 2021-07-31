process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
function sendEmail(to, subject, text){
    let nodemailer = require('nodemailer')
  
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        type: 'login',
        user: 'environmentscorp@gmail.com',
        pass: 'envirocorp00',
      }
    })
  
    let mailOptions = {
      from: 'tuandaunplantstore@gmail.com',
      to: `${to}`,
      subject: `${subject}`,
      text: `${text}`
    }
  
    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        throw err
      } else {
        return`Email sent: ${info.response}`
      }
    })
  }
  
  
  function send(to, text) {
    let subject = 'Your Saldo By Bank Sampah ^^'
    let email = to
    let message = text
    sendEmail(email, subject, message)
  }
  
  module.exports = send