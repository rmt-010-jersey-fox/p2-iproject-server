const {Deck} = require("../models")

class DeckController {
  static async showAll(req, res, next) {
    try {
      res.status(200).json({success: "showAll success"})
    }

    catch(err) {
      next(err)
    }
  }

  static async showOne(req, res, next) {
    try {
      res.status(200).json({success: "showOne success"})
    }

    catch(err) {
      next(err)
    }
  }

  static async create(req, res, next) {
    try {
      res.status(201).json({success: "create success"})
    }

    catch(err) {
      next(err)
    }
  }

  static async editName(req, res, next) {
    try {
      res.status(200).json({success: "editName success"})
    }

    catch(err) {
      next(err)
    }
  }

  static async delete(req, res, next) {
    try {
      res.status(200).json({success: "delete success"})
    }

    catch(err) {
      next(err)
    }
  }

}

module.exports = DeckController