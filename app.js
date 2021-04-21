const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => {
    console.log('running on port ', PORT);
})