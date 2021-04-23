const { WatchList } = require('../models')

class WatchListController {
    static showWatchList(req, res, next) {
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
            next(err)
        })
    }
    static addWatchList(req, res, next) {
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
                throw ({message: 'already have this movie'})
            }
        })
        .then((result) => {
            // console.log(result, 'INI DARI RESULT');
            res.status(201).json(result)
        })
        .catch((err) => {
            next(err)
        })
    }
    static deleteWatchList(req, res, next) {
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
            next(err)
        })
    }
}

module.exports = WatchListController