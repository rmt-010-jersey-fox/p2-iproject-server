const axios = require('axios')

class APIController {
    
    static async getCovidCases(req,res,next) {
        try {
            const showCovidCases = `https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia`
            const cases = await axios.get(showCovidCases)
            console.log(cases);
            // console.log(cases.data);
            const covid = [{
                country: cases.data.All.country,
                confirmed: cases.data.All.confirmed,
                recovered: cases.data.All.recovered,
                deaths: cases.data.All.deaths
            }]
            res.status(200).json(covid)       
        } catch (err) {
            next(err)
        }
    }

    static async getNews(req,res,next) {
        try {
            const showNews = 'https://newsapi.org/v2/top-headlines?' +
            'country=id&' +
            `apiKey=${process.env.NEWS_KEY}`
            const sourceNews = await axios.get(showNews)
            // // console.log(sourceNews.data.articles);
            let news = sourceNews.data.articles
            // console.log(news);
            res.status(200).json(news)       
        } catch (err) {
            next(err)
        }
    }

    static async getWeather(req,res,next) {
        try {
            const showWeather = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY2}&query=Jakarta`
            const weather = await axios.get(showWeather);
            console.log(weather);

            const weatherAPI = [{
                location: weather.data.request.query,
                time: weather.data.location.localtime,
                weatherIcons: weather.data.current.weather_icons[0],
                weatherDescriptions: weather.data.current.weather_descriptions[0],
                temperature: weather.data.current.temperature,
            }]

            res.status(200).json(weatherAPI)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = APIController