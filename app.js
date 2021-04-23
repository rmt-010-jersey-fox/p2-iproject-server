if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 4321;
const errorHandler = require("./middlewares/error-handler");
const cors = require("cors");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on('connection', (socket) => {
    console.log('user connected')

    socket.on('sendMessage', data => {
        socket.broadcast.emit('broadcastMessage', data)
    })

})

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use('/uploads', express.static('uploads'))

app.use(routes);

app.use(errorHandler);

httpServer.listen(PORT, () => {
    console.log(`listening on PORT : ${PORT}`);
});