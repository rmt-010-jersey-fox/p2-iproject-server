const env = process.env.NODE_ENV;

if (env !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer);

io.on("connection", (socket) => {
  socket.on("addMsg", (data) => {
    io.emit("broadcastMsg", data);
  });
});

const cors = require("cors");
const router = require("./routes");
const errorHandling = require("./middlewares/errorHandling");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use(errorHandling);

httpServer.listen(process.env.PORT || 4000);
