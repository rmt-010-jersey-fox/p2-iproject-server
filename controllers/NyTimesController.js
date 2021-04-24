const axios = require('axios')

class NyTimes {
    static rssFeeds(req,res,next){
        axios({
            "url": "https://api.nytimes.com/svc/topstories/v2/books.json?api-key=8vEBI3KMjYM9wQQsglPeSZWR5DqHz0fO",
            "method": "GET",
            "headers": {
              "Accept": "application/json"
            }
        })
        .then(data =>{
            res.status(200).json(data.data.results)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = NyTimes