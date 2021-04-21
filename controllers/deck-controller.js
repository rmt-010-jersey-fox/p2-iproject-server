const {Deck, Card} = require("../models")
const axios = require("axios")

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

  static async exportToPastebin(req, res, next) {
    try {
      let deck = await Deck.findByPk(+req.params.id, {
        include: Card
      })

      if(!deck) throw {name: "DeckNotFound"}
      if(!deck.Cards.length) throw {name: "EmptyDeck"}

      let cards = deck.Cards.map(card => {
        return {
          front: card.front,
          back: card.back
        }
      })

      let deckData = {
        identifier: 'FlasheroDeck',
        name: deck.name,
        cards
      }

      deckData = JSON.stringify(deckData, null, 2)

      axios({
        method: "POST",
        url: "https://pastebin.com/api/api_post.php",
        data: `api_dev_key=${process.env.PASTEBIN_API}&api_option=paste&api_paste_code=${deckData}&api_paste_format=javascript`
      })
        .then(response => {
          res.status(201).json({link: response.data})
        })

        .catch(err => {
          res.status(500).json({err: err.response.data})
        })
    }

    catch(err) {
      next(err)
    } 
  }

  static async importFromPastebin(req, res, next) {
    let input = {
      paste_key: req.body.key
    }
    let deckName
    let cards

    axios({
      method: "GET",
      url: `https://pastebin.com/raw/${input.paste_key}`,
    })
      .then(response => {
        if(response.data.identifier !== 'FlasheroDeck') throw {name: "PastebinGetError"}

        let deckInput = {
          name: response.data.name,
          UserId: +req.user.id
        }
        cards = response.data.cards

        return Deck.create(deckInput)
      })

      .then(newDeck => {
        deckName = newDeck.name

        cards.forEach(card => {
          card.DeckId = newDeck.id
        })

        return Card.bulkCreate(cards, {individualHooks: true})
      })

      .then(() => {
        res.status(201).json({success: `${deckName} has been successfully imported!`})
      })

      .catch(err => {
        next(err)
      })
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