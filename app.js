const express = require('express')
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const cors = require('cors')
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
io.on("connection", (socket) => { 
    console.log('user connected', socket.id);

    socket.on('sendMessage', (data => {
        console.log(data, 'ini keterima di server');

        io.emit('sendBackMessage', data)
    }))

    socket.on("disconnect", () => {
        console.log(socket.id,'socket id keluar');
    })
});

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)
httpServer.listen(port, () => {
    console.log(`listening on ${port}`);
})