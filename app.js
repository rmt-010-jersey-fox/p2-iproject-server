if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const express = require('express')
const router = require('./routes')
const cors = require('cors')
const errorhandling = require('./middlewares/errorhandling')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello WOrld"})
})

app.use(router)
app.use(errorhandling)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})