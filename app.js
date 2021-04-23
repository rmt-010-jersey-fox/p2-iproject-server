if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3100
const cors = require('cors');
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors());
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(router);
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})