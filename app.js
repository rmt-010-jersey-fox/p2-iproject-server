if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const cors = require('cors')
const router = require('./routes')
const errHandler = require('./middlewares/errHandler')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', router)
app.use(errHandler)

httpServer.listen(PORT, () => {
    console.log(`This App is Listening at http://localhost:${PORT}`)
})