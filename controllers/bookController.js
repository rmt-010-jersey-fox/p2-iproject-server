const { Book } = require('../models');

class BookController {
    static read(req, res) {
        Book.findAll({
            where: { UserId: req.loggedUser.id }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }

    static getOne(req, res) {
        Book.findOne({
            where: { id: req.params.id }
        })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: 'Book Not Found' })
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    static add(req, res) {
        const { title, author, description, preview, released_year } = req.body
        Book.create({
            title,
            author,
            description,
            preview,
            released_year,
            UserId: req.loggedUser.id
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }

    static update(req, res) {
        const { title, author, description, preview, released_year } = req.body
        Book.findOne({
            where: { id: req.params.id }
        })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: "Book not found" })
                } else {
                    data.title = title
                    data.author = author
                    data.description = description
                    data.preview = preview
                    data.released_year = released_year
                    return data.save()
                }
            })
            .then(data => {
                res.status(200).json({ message: "Book updated" })
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }


    static delete(req, res) {
        Book.findOne({
            where: { id: req.params.id }
        })
            .then(data => {
                if (!data) {
                    res.status(404).json({ message: "Book not found" })
                } else {
                    return data.destroy()
                }
            })
            .then(data => {
                res.status(200).json({ message: "Book deleted" })
            })
            .catch(err => {
                res.status(500).json({ message: err })
            })
    }
}

module.exports = BookController