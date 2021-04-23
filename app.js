if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index.js')
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler.js')

app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(router)

app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})