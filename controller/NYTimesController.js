const axios = require('axios');
const filterSameISBN = require('../helper/filterSameIsbn')
let NYTimesApiKey = process.env.NYTimesApiKey
const { Book } = require('../models')

class NYTimes {
    static fetchData(req, res, next) {
        let category = ['manga', 'animals', 'education', 'humor', 'family', 'travel', 'health', 'games-and-activities']
        // let category = ['humor']
        const requests = category.map((cat) => {
            return axios({
                method: 'get',
                url: `https://api.nytimes.com/svc/books/v3/lists/current/${cat}.json?api-key=${NYTimesApiKey}`,
            })
        })
        Book.findAll()
            .then((books) =>{
                books.forEach(e => {
                    e.status = 'old'
                    e.save().then(()=>{})
                });
            })
            .then(() =>{
                return Promise.all(requests)
            })
            .then((response) => {
                let data = []
                for (let i = 0; i < response.length; i++) {
                    let results = response[i].data.results
                    for (let j = 0; j < results.books.length; j++) {
                        let books = results.books[j]
                        data.push({
                            category: results.list_name_encoded,
                            isbn: books.primary_isbn10,
                            publisher: books.publisher,
                            description: books.description,
                            title: books.title,
                            author: books.author,
                            bookImage: books.book_image,
                            productURL: books.amazon_product_url,
                            status: 'new'
                        })
                    }
                }
                let filteredData = filterSameISBN(data)
                return Book.bulkCreate(filteredData, {updateOnDuplicate: ["status"]})
            })
            .then(data => {
                res.status(200).json('input data from NY Times to Database Sucess')
                // 'input data from NY Times to Database Sucess'
            })
            .catch(next)
    }
}

module.exports = NYTimes
