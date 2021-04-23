const nodemailer = require("nodemailer");

module.exports = function sendMail(payload, email) {
  let transporter = nodemailer.createTransport({
    service: process.env.SECRET_SERVICE,
    auth: {
      user: process.env.SECRET_EMAIL,
      pass: process.env.SECRET_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.SECRET_EMAIL,
    to: email,
    subject: "RS. H-8 - Transaction success",
    text: `Yth. Bapak/Ibu ${payload.first_name}, proses pemesanan jadwal berobat anda telah berhasil kami terima. Jadwal yang anda pilih adalah ${payload.date} pada sesi ${payload.session} di Poli ${payload.poli} bersama ${payload.doctorName}. \n\n\n\n\n\n Hormat Kami,\n\n\n RS. H-8`,
  };

  return transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    console.log("Email sent: " + info.response);
  });
};
