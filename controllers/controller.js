const axios = require('axios')
class Controller {
    static showCase(req,res){
        axios({
            method: 'get',
            url: 'https://api.kawalcorona.com/indonesia'
        })
        .then(({ data }) => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    static worldCaseShow(req,res) {
        let caseInAnotherWorld = []
        axios({
            method: 'get',
            url: 'https://api.kawalcorona.com'
        })
        .then(({data}) => {
            let globalCases = data.filter(Case => {
                return Case.attributes.Deaths > 1000 && Case.attributes.Deaths < 10000
            })
            globalCases.forEach(element => {
                caseInAnotherWorld.push({
                    "Country": element.attributes.Country_Region,
                    "Confirmed Cases" : element.attributes.Confirmed,
                    "Death Cases": element.attributes.Deaths,
                    "Active Cases": element.attributes.Active,
                    "Recovered": element.attributes.Recovered
                })
            });
            res.status(200).json(caseInAnotherWorld)
        })
        .catch(err => {
            console.log(err)
        })
    }
    static news(req,res){
        let news = []
        axios({
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
            headers: {
                'x-rapidapi-key': '1684e5708bmshf6ed6674d7f658ep1ec277jsnfc406e8356b8',
                'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
        })
        .then(({data}) => {
            let newsFilter = data.news
            for(let i = 0; i < newsFilter.length; i++){
                let filtered = newsFilter[i]
                if(news.length < 4){
                    news.push({
                        title: filtered.title,
                        imageUrl: filtered.urlToImage,
                        img: filtered.imageInLocalStorage,
                        content: filtered.content,
                        link: filtered.link
                    })
                }
            }
            res.status(200).json(news)
            
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = Controller