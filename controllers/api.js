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
        spotifyApi.setRefreshToken(data.body['refresh_token'])
    }, (err) => {
        next(err)
    })

const {getLyrics, getSong} = require('genius-lyrics-api')

class APIController {
    static getPlaylist (req, res, next) {
        const {source} = req.query
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
                        id: i + 1,
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
        const {title, artist} = req.query
        const options = {
            apiKey: process.env.GENIUSAPIKEY,
            title: title,
            artist: artist,
            optimizeQuery: true
        }
        getLyrics(options)
            .then((lyrics) => {
                const arr = lyrics.split(/\r?\n/)
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = '<p>' + arr[i] + '</p>'
                }
                const text = arr.join('<br>')
                res.status(200).json({
                    html: text
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static getBillboardChart (req, res, next) {
        const now = new Date()
        const then = new Date(now.getTime() - (60*60*24*7*1000)).toISOString().split('T')[0]
        axios({
            method: 'GET',
            url: 'https://billboard-api2.p.rapidapi.com/hot-100',
            params: {
                date: then,
                range: '1-10'
            },
            headers: {
                'x-rapidapi-key': process.env.XRAPIDAPIKEY,
                'x-rapidapi-host': process.env.XRAPIDAPIHOST
            }
        })
            .then((response) => {
                const arr = []
                for (let key in response.data.content) {
                    arr.push(response.data.content[key])
                }
                for (let i = 0; i < arr.length; i++) {
                    arr[i]['rank'] = Number(arr[i]['rank'])
                    arr[i]['weeks at no.1'] = Number(arr[i]['weeks at no.1'])
                    arr[i]['last week'] = Number(arr[i]['last week'])
                    arr[i]['peak position'] = Number(arr[i]['peak position'])
                    arr[i]['weeks on chart'] = Number(arr[i]['weeks on chart'])
                }
                res.status(200).json({
                    info: {
                        category: response.data.info.category,
                        chart: response.data.info.chart,
                        update: response.data.info.date
                    },
                    content: arr
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = APIController