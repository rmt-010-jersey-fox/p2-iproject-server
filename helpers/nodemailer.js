var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3c8dab800939e0",
        pass: "0e8bf469cdb0a5"
    }
});


module.exports = transporter