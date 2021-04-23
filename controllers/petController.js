const { Pet, User } = require("../models")
const { Op } = require("sequelize");

class PetController {
    static getPet(req, res) {
        Pet.findAll({
            where: {
                UserId: { [Op.is]: null }
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static addPet(req, res) {
        console.log(req.body, "ini booody");
        Pet.create({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description,

        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })

    }
    static deletePet(req, res) {
        console.log(req.params);
        Pet.findByPk(req.params.id)
            .then(data => {

                if (!data) {
                    res.status(404).json({ msg: "data is not found 1" })
                } else {
                    return data.destroy()
                }
            })
            .then(data => {
                res.status(200).json({ msg: "Sukses delete" })
            })
            .catch(err => {
                console.log(err);
                res.status(404).json({ msg: "data is not found  2" })
            })
    }
    static editPet(req, res) {
        Pet.update({
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
        }, {
            returning: true // khusus update, untuk mengeluarkan data
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })

    }
    static adoptPet(req, res) {

        Pet.update({
            UserId: req.loggedUser.id
        }, {
            where: {
                id: req.params.id
            }, returning: true // khusus update, untuk mengeluarkan data
        })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    static myPet(req, res) {
        Pet.findAll({
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

}

module.exports = PetController