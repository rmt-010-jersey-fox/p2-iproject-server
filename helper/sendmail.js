const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hello.emiliakhaer@gmail.com',
        pass: process.env.passMail
    }
});

const sendEmail = (email)=>{
    const Option = {
        from: 'hello.emiliakhaer@gmail.com',
        to: email,
        subject: 'Register FindBuddy',
        text: 'Thankyou!'
    }
    transporter.sendMail(Option, (err, info) => {
        if (err) throw err;
        console.log('Email sent: ' + info.response);
    });
}

module.exports = {sendEmail}