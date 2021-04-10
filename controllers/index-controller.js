const {User} = require("../models")

class IndexController {
  static async login(req, res, next) {
    try {
      res.status(200).json({success: "login success"})
    }

    catch(err) {
      next(err)
    }
  }

  static async glogin(req, res, next) {
    try {
      res.status(200).json({success: "glogin success"})
    }

    catch(err) {
      next(err)
    }  
  }

  static async register(req, res, next) {
    try {
      res.status(201).json({success: "register success"})
    }

    catch(err) {
      next(err)
    }  
  }

  static async userProfile(req, res, next) {
    try {
      res.status(200).json({success: "getuser success"})
    }

    catch(err) {
      next(err)
    }  
  }
}

module.exports = IndexController