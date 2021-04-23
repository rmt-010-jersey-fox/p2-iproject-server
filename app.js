if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const router = require('./routes/routes')
const errorHandling = require('./middlewares/errorHandler')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/', router)

app.use(errorHandling)

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})