if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const users = []

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('sendMessage', (data) => {
    // console.log(data, 'received on server')

    io.emit('broadcastMsg', data)
  })

  socket.on('loginUser', (user) => {
    users.push(user)
    console.log(users, '<<<<<<<<<<<<<')

    io.emit('sendAllUsers', users)
  })
})

app.use(router)

app.use(errorHandler)


http.listen((port), () => {
  console.log(`This server listening at http://localhost:${port}`)
})