const {Deck, Card} = require("../models")

class DeckController {
  static async showAll(req, res, next) {
    try {
      let decks = await Deck.findAll({
        where: {
          UserId: +req.user.id
        },
        include: Card
      })

      res.status(200).json(decks)
    }

    catch(err) {
      next(err)
    }
  }

  static async showOne(req, res, next) {
    try {
      let deck = await Deck.findByPk(+req.params.id, {
        include: Card
      })
      res.status(200).json(deck)
    }

    catch(err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    let input = {
      name: req.body.name,
      UserId: +req.user.id
    }

    try {
      let newDeck = await Deck.create(input)

      res.status(201).json(newDeck)
    }

    catch(err) {
      next(err)
    }
  }

  static async editName(req, res, next) {
    let input = {
      name: req.body.name || ""
    }
    try {
      await Deck.update(input, {
        where: {
          id: +req.params.id
        }
      })

      res.status(200).json({success: "Deck's name has been updated"})
    }

    catch(err) {
      next(err)
    }
  }

  static async delete(req, res, next) {
    try {
      await Deck.destroy({
        where: {
          id: +req.params.id
        }
      })

      res.status(200).json({success: "The deck has been successfully deleted"})
    }

    catch(err) {
      next(err)
    }
  }

}

module.exports = DeckController