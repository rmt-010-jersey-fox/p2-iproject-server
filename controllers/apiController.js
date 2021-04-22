const axios = require('axios')
const Genius = require("genius-lyrics");
const Client = new Genius.Client();
const ACCESS_TOKEN = process.env.GENIUS_CLIENT_ACCESS_TOKEN

class APIController {
    static async geniusLyrics (req, res, next) {
        let keywords = req.body.keywords
        const searches = await Client.songs.search(keywords);
        const firstSong = searches[0];
        const lyrics = await firstSong.lyrics()
        .then(lyrics => {
            res.status(200).json(lyrics)
        })
        .catch(err => {
            next(err)
        })
    }
    
    static dataToFetch(req, res, next) {
        let keywords = req.body.keywords
        let searchResultData = []
        axios({
            method: 'get',
            url: `https://api.genius.com/search?q=${keywords}&access_token=${ACCESS_TOKEN}`
        })
        .then(resultData => {
            let path = resultData.data.response.hits
            path.forEach(el => {
            let dataToFetch = {
                track_title: el.result.title,
                artist: el.result.primary_artist.name,
                album_title: el.result.title_with_featured
            }
                searchResultData.push(dataToFetch)                
            });
            res.status(201).json(searchResultData)
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports  = APIController