if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const express = require('express')
const port = process.env.PORT || 3000
const cors = require('cors')
const errorHandler = require('./middlewares/error-handler')
const router = require('./routes')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(errorHandler)

const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const activeUser = []

io.on('connection', (socket) => {
	/* ... */
	console.log('user connected')
	socket.on('loginUser', (data) => {
		let temp = activeUser.filter((el) => el.sender === data.sender)
		if (!temp.length) {
			activeUser.push(data)
		}
		console.log(data)
		io.emit('activeUser', activeUser)
	})
	socket.on('checkActiveUser', () => {
		io.emit('getActiveUser', activeUser)
	})
	socket.on('sendLiveChat', (data) => {
		socket.broadcast.emit('broadcastLiveChat', data)
	})
})

httpServer.listen(port, () => {
	console.log(`Listen to port ${port}`)
})
