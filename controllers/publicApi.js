const axios = require('axios')

class APIController {
    static async getCalendar(req,res,next) {
        try {
            const showCalendarURL = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.API_KEY}&country=ID&year=2021`
            const calendar = await axios.get(showCalendarURL)
            // console.log(calendar);
            // console.log(calendar.data.response.holidays);
            const holidays = []

            calendar.data.response.holidays.forEach(holiday => {
                holidays.push({
                    name: holiday.name,
                    date: holiday.date.iso,
                    description: holiday.description
                })
            })
            res.status(200).json(holidays)

        } catch (err) {
            next(err)
        }
    }

    static async getCovidCases(req,res,next) {
        try {
            const showCovidCases = `https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia`
            const cases = await axios.get(showCovidCases)
            // console.log(cases);
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

    static async getWeather(req,res,next) {
        try {
            const showWeather = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY2}&query=Jakarta`
            const weather = await axios.get(showWeather);
            console.log(weather.data.current);

            const weatherAPI = [{
                weatherIcons: weather.data.current.weather_icons,
                weatherDescriptions: weather.data.current.weather_descriptions,
                temperature: weather.data.current.temperature,
                humidity: weather.data.current.humidity,
                windDirecttions: weather.data.current.wind_dir
            }]

            res.status(200).json(weatherAPI)

        } catch (err) {
            next(err)
        }
    }
}

module.exports = APIController