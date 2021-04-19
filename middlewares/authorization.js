const {Deck} = require("../models")

async function authorize(req, res, next) {
  try {
    if(req.baseUrl.includes("decks")) {
      let deck = await Deck.findByPk(+req.params.id)
  
      if(!deck) throw {name: "DeckNotFound"}
      if(deck.UserId !== +req.user.id) throw {name: "Unauthorized"}
    
      next()
    } else if(req.baseUrl.includes("cards")) {

      next()
    }

  }

  catch(err) {
    next(err)
  }

}

module.exports = authorize