const axios = require('axios');

class ApiController {

    // PEXELS
    static imageAPI(req, res, next) {
        const search = req.query.search
        axios({
            method: "GET",
            url: `https://api.pexels.com/v1/search?query=${search}&per_page=12`,
            headers: {
                Authorization: '563492ad6f9170000100000161d453dedcea45ac9eb736a1b1b9e857'
            }
        })
        .then(response => {
            res.status(200).json(response.data.photos);
        })
        .catch(err => {
           next(err);
        })
    }

    static pixaAPI(req, res, next) {
        const key = "21272901-35234c15985795a634ada5356";
        const inputCategory = req.query.category;
        const page = req.query.page;
        console.log(page)
        axios({
            method: "GET",
            url: `https://pixabay.com/api/?key=${key}&category=${inputCategory}&per_page=9&page=${page}`,
        })
        .then(response => {
            res.status(200).json(response.data.hits);
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = ApiController;