const {Deck, Card} = require("../models")

async function authorize(req, res, next) {
  try {
    if(req.baseUrl.includes("decks")) {
      let deck = await Deck.findByPk(+req.params.id)
  
      if(!deck) throw {name: "DeckNotFound"}
      if(deck.UserId !== +req.user.id) throw {name: "Unauthorized"}
    
      next()

    } else if(req.baseUrl.includes("cards")) {
      let card = await Card.findByPk(+req.params.id, {
        include: Deck
      })

      if(!card) throw {name: "CardNotFound"}
      if(card.Deck.UserId !== +req.user.id) throw {name: "Unauthorized"}
      next()
    }

  }

  catch(err) {
    next(err)
  }

}

module.exports = authorize