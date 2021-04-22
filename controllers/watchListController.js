const { WatchList } = require('../models')

class WatchListController {
    static showWatchList(req, res) {
        const UserId = req.nowLogged.UserId
        WatchList.findAll({
            where: {
                UserId
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static addWatchList(req, res) {

    }
    static deleteWatchList(req, res) {

    }
}

module.exports = WatchListController