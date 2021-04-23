const axios = require('axios')

class quotesController {

    static findAll(req, res, next) {
        axios({
                method: 'GET',
                url: 'https://quote-garden.herokuapp.com/api/v3/quotes',

            }).then(response => {
                const quotes = []

                response.data.data.forEach(e => {
                    quotes.push({
                        author: e.quoteAuthor,
                        text: e.quoteText
                    })
                })

                res.status(200).json(quotes)
                    // console.log(response.data);

            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }


}

module.exports = quotesController