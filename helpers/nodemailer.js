const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "rezanasu@outlook.com",
        pass: "maestro82"
    }
})

module.exports = transporter