const axios = require('axios')

class newsController {

    static findAll(req, res, next) {
        axios({
                method: 'GET',
                url: 'https://newsapi.org/v2/everything?q=Apple&from=2021-04-22&sortBy=popularity&apiKey=5df812ed74184c438ff161aad7f806c8',

            }).then(response => {
                const news = []

                response.data.articles.forEach(e => {
                    news.push({
                        author: e.author,
                        title: e.title,
                        description: e.description,
                        urlToImage: e.urlToImage,
                        publishedAt: e.publishedAt
                    })
                })
                res.status(200).json(news)
                    // console.log(response.data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    }


}

module.exports = newsController