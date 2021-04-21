if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes');
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => {
    console.log(`this app running at http://localhost:${port}`)
})