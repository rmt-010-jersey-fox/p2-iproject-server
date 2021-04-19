const axios = require('axios')

const SpotifyWebApi = require('spotify-web-api-node')
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFYCLIENTID,
    clientSecret: process.env.SPOTIFYCLIENTSECRET
})
spotifyApi
    .clientCredentialsGrant()
    .then((data) => {
        spotifyApi.setAccessToken(data.body['access_token'])
    }, (err) => {
        next(err)
    })

const {getLyrics, getSong} = require('genius-lyrics-api')

class APIController {
    static getPlaylist (req, res, next) {
        const {source} = req.body
        spotifyApi.getPlaylist(source)
            .then((data) => {
                const tracks = []
                for (let i = 0; i < data.body.tracks.items.length; i++) {
                    const arrArtist = []
                    for (let j = 0; j < data.body.tracks.items[i].track.album.artists.length; j++) {
                        arrArtist.push(data.body.tracks.items[i].track.album.artists[j].name)
                    }
                    const artists = arrArtist.join(', ')
                    tracks.push({
                        artists: artists,
                        album: data.body.tracks.items[i].track.album.name
                    })
                }
                res.status(200).json({
                    image_url: data.body.images[0].url,
                    name: data.body.name,
                    tracks: tracks
                });
            }, (err) => {
                next(err);
            })
    }

    static getLyrics (req, res, next) {
        const {title, artist} = req.body
        const options = {
            apiKey: process.env.GENIUSAPIKEY,
            title: title,
            artist: artist,
            optimizeQuery: true
        }
        getLyrics(options)
            .then((lyrics) => {
                const text = lyrics.split(/\r?\n/).join('<br>')
                res.status(200).json({
                    html: text
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = APIController