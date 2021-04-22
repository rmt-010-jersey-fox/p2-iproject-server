const axios = require('axios')

class rawgController{
    static async getPopularGames(req, res, next) {
        try {  
            const date = new Date()
            const thisYear = date.getFullYear()
            const data = await axios({
                method: 'GET',
                url : `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}=${thisYear}-01-01,${thisYear}-12-31&ordering=-added`
            })
            const result = data.data.results.slice(0, 10)

            result.forEach(el => {
                delete el.tags 
                delete el.ratings
            });
            
            res.status(200).json(result)
        } catch (err) {
            res.send(err)
            next(err)
        }
    }

    static async getAvatar(req, res, next) {
        try {
            const random = Math.random() * 1100000
            const data = await axios({
                method: 'GET',
                url : `https://avatars.dicebear.com/api/male/${random}.svg?mood[]=happy`
            })
            res.status(200).json(data.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = rawgController