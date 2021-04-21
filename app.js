const express = require('express')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const app = express()
const port = 3000
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)
app.listen(port, () => {
    console.log(`listening on ${port}`);
})