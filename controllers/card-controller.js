const {Deck, Card} = require("../models")

class CardController {
  static async showOne(req, res, next) {
    try {
      let card = await Card.findByPk(+req.params.id, {
        include: Deck
      })

      res.status(200).json(card)
    }

    catch(err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    let input = {
      DeckId: req.body.DeckId || 0,
      front: req.body.front || "",
      back: req.body.back || ""
    }

    try {
      let foundDeck = await Deck.findByPk(input.DeckId)
 
      if(!foundDeck) throw {name: "DeckNotFound"} //cek apakah punya deck dengan deckid itu
      if(foundDeck.UserId !== +req.user.id) throw {name: "Unauthorized"} //jika deck memang benar ada, cek apakah itu punya user

      await Card.create(input) 

      res.status(201).json({success: `Card has been successfully added to Deck ${foundDeck.name}`})
    }

    catch(err) {
      next(err)
    }
  }

  static async edit(req, res, next) {
    let input = {
      DeckId: req.body.DeckId || 0,
      front: req.body.front || "",
      back: req.body.back || ""
    }

    try {
      let foundDeck = await Deck.findByPk(input.DeckId)
 
      if(!foundDeck) throw {name: "DeckNotFound"} //cek apakah punya deck dengan deckid itu
      if(foundDeck.UserId !== +req.user.id) throw {name: "Unauthorized"} //jika deck memang benar ada, cek apakah itu punya user

      await Card.update(input, {
        where: {
          id: +req.params.id
        }
      })
      
      res.status(200).json({success: `Card has been successfully updated`})
    }

    catch(err) {
      next(err)
    }
  }

  static async masteryUpdate(req, res, next) {
    let today = new Date()
    let newDue = new Date()
    console.log('AAAAAAAAA <<<<<<<<<<<<<<<<<')

    let input = {
      mastery: req.body.mastery,
      due: newDue.setDate(today.getDate() + 1 + +req.body.mastery)
    }

    try {
      await Card.update(input, {
        where: {
          id: +req.params.id
        }
      })

      res.status(200).json({newMastery: input.mastery})
    }

    catch(err) {
      next(err)
    }
  }

  static async delete(req, res, next) {
    try {
      await Card.destroy({
        where: {
          id: +req.params.id
        }
      })

      res.status(200).json({sucess: "Card has been successfully deleted"})
    }

    catch(err) {
      next(err)
    }
  }

}

module.exports = CardController