if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port =  process.env.PORT || 5000
const router = require('./routes')
const cors = require('cors')

//* body-parser 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`I love you $${port}`)
})