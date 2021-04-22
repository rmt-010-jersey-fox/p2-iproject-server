if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config()
        // console.log(process.env);
}

// require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
    // const PORT = 3000;
const errHandler = require('./middlewares/err-handler')
const cors = require('cors');
const router = require('./routes');
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('ini test koneksi')
// })


app.use('/', router)
app.use(errHandler)

app.listen(PORT, () => {
    console.log(`i love you ${PORT}`);
})

module.exports = app