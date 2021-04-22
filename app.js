if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const router = require('./routes/router');
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
    console.log('server is running...');
})
