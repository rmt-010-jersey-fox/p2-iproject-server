if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 4321;
const errorHandler = require("./middlewares/error-handler");
const cors = require("cors");

app.use(cors())


app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

app.use('/uploads', express.static('uploads'))

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on PORT : ${PORT}`);
});