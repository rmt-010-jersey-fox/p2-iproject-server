require('dotenv').config()
const axios = require('axios');

// AWAL CRON
var CronJob = require('cron').CronJob;
var job = new CronJob('0 */1 * * * *', function () {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/nytimes',
        data : {
            password: process.env.NYpassword
        }
    })
        .then(()=>{
            console.log('input data from NY Times to Database Sucess');
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
}, null, true, 'Asia/Jakarta');
// AKHIR CRON

var cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

const port = 3000
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const router = require('./routes/index')
const { errorHandler } = require('./middleware/errorHandler')

app.use('/', router)
app.use('/', errorHandler)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})