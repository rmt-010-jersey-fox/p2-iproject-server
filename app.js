require('dotenv').config()
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