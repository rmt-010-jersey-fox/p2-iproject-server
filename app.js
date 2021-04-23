if(process.env.NODE_ENV !== "production") require("dotenv").config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const index = require("./routes/index-route")
const cors = require("cors")
const errorHandler = require("./middlewares/error-handler")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", index)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})