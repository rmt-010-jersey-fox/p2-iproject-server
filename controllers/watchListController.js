const { WatchList } = require('../models')

class WatchListController {
    static showWatchList(req, res) {
        const UserId = +req.nowLogged.id
        WatchList.findAll({
            where: {
                UserId
            }
        })
        .then((data) => {
            // console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static addWatchList(req, res) {
        const newData = {
            title: req.body.title,
            poster_path: req.body.poster_path,
            UserId: req.nowLogged.id,
        };
        WatchList.findOne({
            where: {
                title: newData.title
            }
        })
        .then((data) => {
            // console.log(data, 'INI DATA NYA');
            if(!data) {
                return WatchList.create(newData)
            }else {
                res.status(401).json({message: 'already have this movie'})
            }
        })
        .then((result) => {
            // console.log(result, 'INI DARI RESULT');
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
    static deleteWatchList(req, res) {
        let id = +req.params.id
        WatchList.destroy({
            where: {
                id
            }
        })
        .then((_) => {
            res.status(200).json({message: 'Success deleted list movie'})
        })
        .catch((err) => {
            res.status(500).json(err.message)
        })
    }
}

module.exports = WatchListController