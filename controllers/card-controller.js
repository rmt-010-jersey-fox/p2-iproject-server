const {User, Deck, Card} = require("../models")

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
    if(!req.body.answer) throw {name: "InvalidAnswerType"}

    let today = new Date()
    let newDue = new Date()
    let level

    let input = { 
      mastery: +req.body.mastery,
      
    }

    if(req.body.answer !== "again") {
      if(+req.body.mastery === 0) {
        input.due = newDue.setDate(today.getDate() + 1 +req.body.mastery) //jadwalkan card untuk muncul lagi
      } else {
        input.due = newDue.setDate(today.getDate() + +req.body.mastery) //jadwalkan card untuk muncul lagi
      }

    }

    try {
      await Card.update(input, {
        where: {
          id: +req.params.id
        }
      })

      //update XP user
      let gainedXP = 0
      let cleared = 0

      if(req.body.answer !== "again") {
        let multiplier = input.mastery
        cleared = 1
        
        if(multiplier > 10) multiplier = 10

        if(req.body.answer === "good") {
          gainedXP = 3 * multiplier
  
        } else if (req.body.answer === "hard") {
          gainedXP = multiplier + 1
  
        } 

        await User.increment({exp: gainedXP, cardsCleared: cleared}, {
          where: {
            id: +req.user.id
          }
        })

        let user = await User.findByPk(+req.user.id)

        level = user.showLevelAndNext().level
      }

      res.status(200).json({newMastery: input.mastery, level})
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