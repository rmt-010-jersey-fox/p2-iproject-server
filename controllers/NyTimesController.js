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
            let result = JSON.stringify(data)
            res.status(200).json(result)
        })
        .catch(err=>{
            next(err)
        })
    }
}

module.exports = NyTimes