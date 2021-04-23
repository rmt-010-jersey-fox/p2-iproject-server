const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(email, objData) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'maulyintan88@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'maulyintan88@gmail.com',
            to: email,
            subject: 'Transaksi Sewa Mobil.com',
            text: 'Berikut detail pemesanan:',
            html: `<h2>Transaksi anda telah berhasil, pihak kami akan menghubungi anda untuk proses selanjutnya. Terima Kasih</h2>`
        }

        const result = await transport.sendMail(mailOptions)
        return result;

    } catch (e) {
        return e
    }
}

module.exports = sendMail;