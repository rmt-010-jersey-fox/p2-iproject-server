var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "cbac2703de5e9d",
        pass: "a7814e4612b97a"
    }
});


module.exports = transporter