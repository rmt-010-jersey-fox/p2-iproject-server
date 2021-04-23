const axios = require('axios')

class ArticleController {
    static showArticle(req, res, next) {
        axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/everything?q=climate&sortBy=publishedAt&apiKey=6f676d3ba598444a9df977b2ec1cefc7'
        })
        .then(({data}) => {
            // console.log(data, "<<data")
            const articles = []
            data.articles.forEach(article => {
               articles.push({
                   title: article.title,
                   description: article.description,
                   url: article.url,
                   urlToImage: article.urlToImage
               })
            });
            res.status(200).json(articles)
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({message: error.message})
          })
    }
}

module.exports = ArticleController