if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes')
const cors = require('cors')
const sendEmail = require('./helpers/nodeMailer')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(sendEmail)

app.listen(PORT, () => {
    console.log(`FoodLova app listening at http://localhost:${PORT}`)
  })