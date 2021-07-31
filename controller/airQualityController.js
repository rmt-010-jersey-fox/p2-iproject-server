const axios = require('axios')

class AirController {
    static getAirQuality (req, res, next) {
        axios({
            method: 'GET',
            url: `http://api.airvisual.com/v2/nearest_city?lat=-6.16&lon=106.86&key=${process.env.AIRAPI}`
        })
        .then(response => {
            const AQI_US = response.data.data.current.pollution.aqius
            let converter = {}
            if (AQI_US < 50) {
                converter = {
                    color: 'Green',
                    level: 'Good'
                }
            } else if (AQI_US < 100) {
                converter = {
                    color: 'Yellow',
                    level: 'Moderate'
                }
            } else if (AQI_US < 150) {
                converter = {
                    color: 'Orange',
                    level: 'Unhealthy for Sensitives People'
                }
            } else if (AQI_US < 200) {
                converter = {
                    color: 'Red',
                    level: 'Unhealthy'
                }
            } else if (AQI_US < 300) {
                converter = {
                    color: 'Purple',
                    level: 'Very Unhealthy'
                }
            } else {
                converter = {
                    color: 'Maroon',
                    level: 'Hazardous'
                }
            }
            res.status(200).json({data: response.data.data, converted: converter})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = AirController