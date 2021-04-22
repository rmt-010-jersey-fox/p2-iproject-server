if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express()
const route = require('./routes/index');
const port = process.env.PORT || 3000
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', route);
app.use(errorHandler)
app.listen(port, () => {
    console.log(`listened at port ${port}`);
})