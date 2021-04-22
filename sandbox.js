if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const router =  require('./routes/index')
const express =  require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})