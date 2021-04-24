const fs = require('fs')
var DetectLanguage = require('detectlanguage');

const data = JSON.parse(fs.readFileSync('./language.json'))
class SentimController {
    static textAnalysis(req, res, next) {
        var detectlanguage = new DetectLanguage('14ec1201a708be4f10f3f39e5a50b03b')
        let status = req.body.status
        detectlanguage.detect(status).then((result) => {
            let temp = JSON.parse(JSON.stringify(result[0].language))
            for(let i = 0; i < data.length; i++ ){
                if(temp == data[i].aa) {
                    res.status(200).json(data[i].Afar)
                }
            }
        })
    }
}

module.exports = SentimController