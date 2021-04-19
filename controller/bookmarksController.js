const {Bookmark} = require ('../models')

class bookmarksController {
    static getBookmarks(req, res, next) {
        Bookmark.findAll({
          order: [["id"]],
        })
          .then((data) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            next(err);
          });
    }

    static postBookmarks(req,res,next){
        let input = {
            title: req.body.title,
            UserId: req.loggedUser.id,
            lang: req.body.lang
          };
          Bookmark.create(input)
            .then((data) => {
              res.status(201).json(data);
            })
            .catch((err) => {
              if (err.name === "SequelizeValidationError") {
                next(err);
              } else {
                next(err);
              }
            });
    }

    static deleteBookmarks(req,res,next){
        Bookmark.destroy({
            where: {
                title: req.body.title,
                UserId: req.loggedUser.id,
                lang: req.body.lang
            }
        })
        .then((data)=>{
            if (data===1){
                res.status(200).json({ message: "manga successfully deleted from bookmark" });
            }else {
                throw {name: "manga not found"}
            }
        })
        .catch((err) => {
            next(err);
          });
    }


}
module.exports = bookmarksController