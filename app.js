const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Controller = require('./controllers/controller.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.put('/user', Controller.editUser)
app.post('/history', Controller.addHistory)
app.get('/history', Controller.getHistory)
app.get('/location', Controller.fetchProvince)
app.get('/ongkir/:province', Controller.fetchCity)
app.post('/ongkir', Controller.fetchOngkir)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})