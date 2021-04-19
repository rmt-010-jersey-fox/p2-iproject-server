if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express')
const port = process.env.PORT || 3000
const cors = require('cors')
const errorHandler = require('./middlewares/error-handler')
const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
	console.log(`Liste to port ${port}`)
})
