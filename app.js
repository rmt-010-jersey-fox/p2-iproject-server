if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
app.use(function errorHandler(error, req, res, next) {
  if (error.status === 500) {
    res.status(500).json({ message: "Internal server error" });
  } else {
    res.status(error.status).json({ message: error.message });
  }
});

module.exports = app;
