const axios = require('axios')

class ArticleController {
    static showArticle(req, res, next) {
        axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/everything?q=climate&from=2021-03-21&sortBy=publishedAt&apiKey=83e2af908d864203b857121c14e2432b'
        })
        .then(({data}) => {
            // console.log(data)
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