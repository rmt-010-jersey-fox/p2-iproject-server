if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes/index')
const { errorHandler } = require('./middlewares/errorHandler')
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on('connection', (socket) => {
    console.log('user connected')

    socket.on('sendMessage', data => {
        socket.broadcast.emit('broadcastMessage', data)
    })

})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)
app.use(errorHandler)

httpServer.listen(PORT, () => {
    console.log(`listening on PORT : ${PORT}`);
});
// app.listen(PORT, () => {
//     console.log('running on port ', PORT);
// })