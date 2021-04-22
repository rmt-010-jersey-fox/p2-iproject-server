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

routes.get('/bitcoins', (req, res, next) => {
    axios({
        url: 'https://api.coingecko.com/api/v3/coins/bitcoin',
        methods: 'GET'
    })
        .then(response => {
            const idr = response.data.market_data.price_change_percentage_1h_in_currency.idr
            const percentage = response.data.sentiment_votes_up_percentage
            console.log(idr, percentage, 'iniiiii')
            res.status(200).json({idr, percentage})
        })
        .catch(error =>{
            console.log(error)
        })
})

routes.use(authenticate)
routes.use('/finances', FinanceRoutes)



module.exports = routes