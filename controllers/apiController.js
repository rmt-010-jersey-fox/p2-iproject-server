const axios = require('axios')
const ACCESS_TOKEN = process.env.GENIUS_CLIENT_ACCESS_TOKEN
const BEARER_ACCESS_TOKEN = process.env.SPOTIFY_AUTHORIZATION
// https://api.genius.com/oauth/authorize?client_id=Ul2TCWFz3CZ4yU3nBNrIziOMUWdkEPZdajxUMnWUyKLVzERzBnxzZlZiVz-KbsCH&redirect_uri=http://localhost:3000&scope=me&state=8&response_type=code

class APIController {
    static geniusLyrics (req, res, next) {
        let keywords = req.body.keywords
        axios({
            method: 'get',
            url: `https://api.genius.com/search?q=${keywords}&access_token=${ACCESS_TOKEN}`
        })
        .then(response => {
            const path = response.data.response.hits[0].result
            let searchResult = {
                    track_title: path.full_title,
                    api_path: path.api_path,
                    url: path.url,
                    artist: path.primary_artist.name,
                    album_title: path.title_with_featured
                }
            res.status(200).json(searchResult)
        })
        .catch(err => {
            next(err)
        })
    }

    static spotifyData (req, res, next) {
        req.headers.Authorization = BEARER_ACCESS_TOKEN
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/featured-playlists'
        })
        .then(response => {
            console.log(response);
            // res.status(200).json(searchResult)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports  = APIController