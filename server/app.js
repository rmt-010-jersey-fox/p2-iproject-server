let env = process.env.NODE_ENV;

if (env !== "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const cors = require("cors");
const router = require("./routes");
const errorHandling = require("./middlewares/errorHandling");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use(errorHandling);

app.listen(process.env.PORT || 4000);
