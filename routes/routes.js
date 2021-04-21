const routes = require('express').Router()
const UsersController = require('../controllers/usercontroller')
const { authenticate } = require('../middlewares/authentication')
const FinanceRoutes = require('./FinanceRoutes')
const axios = require('axios')
routes.post('/signup', UsersController.signup)
routes.post('/signin', UsersController.signin)
routes.get('/news', (req, res, next) => {
    axios({
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=422afd8a09284ab49caa61d6e1479470',
        methods: 'GET'
    })
        .then(response => {
            let data = []
            for (let i = 0; i < 4; i++) {
                data.push(response.data.articles[i])
            }
            res.status(200).json(data)
        })
        .catch(error =>{
            console.log(error)
        })
})

routes.use(authenticate)
routes.use('/finances', FinanceRoutes)



module.exports = routes