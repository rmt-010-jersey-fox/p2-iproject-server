let nodemailer = require('nodemailer');

function sendEmail(reciever, subject, text) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'edbert0076@gmail.com',
            pass: 'Awdawd123'
        }
    });

    let mailOptions = {
        from: 'edbert0076@gmail.com',
        to: reciever,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = sendEmail