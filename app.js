if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require("express");
const cors = require("cors");
const router = require("./routers")
const errorsHandler = require('./middlewares/errorsHandler')
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',router)
app.use(errorsHandler)

app.listen( port, () => {
  console.log( `running at http://localhost:${port}` )
} )

