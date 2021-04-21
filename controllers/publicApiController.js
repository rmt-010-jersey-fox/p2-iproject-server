const axios = require("axios")

class PublicApiController {
    static async searchBooks(req, res) {
        try {
            const { userSearch } =  req.body
            let books = await axios({
                method: 'GET',
                url: `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&orderBy=relevance&key=${process.env.GOOGLE_BOOKS_API}`
            })
            let booksData = []
            books.data.items.forEach(el => {
                let author = 'No Data'
                if (el.volumeInfo.authors) {
                    author = el.volumeInfo.authors[0]
                }
                let thumbnail = 'https://i.imgur.com/iFHvNUy.jpg'
                if (el.volumeInfo.imageLinks) {
                    thumbnail = el.volumeInfo.imageLinks.thumbnail
                }
                let released_year = 'No Data'
                if (el.volumeInfo.publishedDate) {
                    released_year = el.volumeInfo.publishedDate.split("-")[0]
                }
                let bookData = {
                    id: el.id,
                    title: el.volumeInfo.title,
                    author,
                    description: el.volumeInfo.description || 'No Description',
                    preview: thumbnail,
                    released_year
                }
                booksData.push(bookData)
            });
            res.status(200).json(booksData)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }

    static async getBooksRecommendation(req, res) {
        try {
            let booksRecommendation = await axios({
                method: 'GET',
                url: `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${process.env.NY_TIMES_API}`
            })
            res.status(200).json(booksRecommendation.data.results.books)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }
}

module.exports = PublicApiController