const { Image, User } = require("../models");
const transporter = require("../helpers/nodemailer")

class ImageController {

    static addImage(req, res, next) {
        let { imgUrl, category, description } = req.body;
        console.log(req.loggedUser.id);
        
        Image.create({
            imgUrl,
            category,
            description,
            userId: req.loggedUser.id
        })
        .then(image => {

            const options = {
                from: "rezanasu@outlook.com",
                to: req.loggedUser.email,
                subject: "Thank you",
                text: `
                Thanks for posting your photos, keep going strong!
                
                Image-url: ${imgUrl},
                Category: ${category},
                Description: ${description}
                `
            }

            transporter.sendMail(options, function (err, info) {
                if(err) {
                    throw new Error()
                }
                console.log(`Sent: ${info.response}`)
            })
            
            res.status(201).json({
                imgUrl,
                category,
                description,
                userId: req.loggedUser.id
            });
        })
        .catch(err => {
            if(err.name === "SequelizeValidationError") {
                next({name: "ValidationError", currentError: err});
            } else {
                
                next(err);
            }
        });
    }

    static showImages(req, res, next) {
        Image.findAll({
            include: {
                model: User
            }
        })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                next(err);
            })
    }

    static myImages(req, res, next) {
        Image.findAll({
            where: {
                userId: req.loggedUser.id
            }
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            next(err);
        })
    }

    static getImage(req, res, next) {
        let id = req.params.id;
        Image.findByPk(id, {
            include: {
                model: User
            }
        })
            .then(image => {
                if(image) {
                    res.status(200).json(image);
                } else {
                    next({name: "ImageNotFound"});
                }
            })
            .catch(err => {
                next(err);
            })
    }

    static editImage(req, res, next) {
        let {imgUrl, category, description} = req.body;
        let id = req.params.id;

        Image.update({
            imgUrl,
            category,
            description
        }, {
            where: {
                id
            }
        })
        .then(data => {
          
            res.status(200).json({
                msg: "Successfully updated",
            })

        })
        .catch(err => {
            if(err.name === "SequelizeValidationError") {
                next({name: "ValidationError", currentError: err});
            } else {
                next(err);
            }
        })
    }

    static editDescription(req, res, next) {
        let id = req.params.id;
        let { description } = req.body;

        Image.update({
            description
        }, {
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({
                msg: "Description successfully updated"
            });
        })
        .catch(err => {
            next(err);
        })
    }
    
    static deleteImage(req, res, next) {
        let id = req.params.id;

        Image.destroy({
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({
                msg: "Image successfully deleted"
            });
        })
        .catch(err => {
            next(err);
        })
    }
}

module.exports = ImageController;