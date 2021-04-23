const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const errHandler = require('./helper/errHandler')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)
app.use(errHandler)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})