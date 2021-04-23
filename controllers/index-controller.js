const {User} = require("../models")
const checkPassword = require("../helpers/check-hashed-password")
const generateAvatar = require("../helpers/random-avatar-generator")
const jwt = require("jsonwebtoken")

class IndexController {
  static async login(req, res, next) {
    let input = {
      username: req.body.username,
      password: req.body.password
    }

    try {
      if(!input.username || !input.password) throw {name: "FalsyUsernameOrPassword"}

      let user = await User.findOne({
				where: {
					username: input.username
				}
			})

      if(user && checkPassword(input.password, user.password)) {
				let token = jwt.sign({id: user.id, username: user.username}, process.env.SECRET_CODE || "secret")
				
				res.status(200).json({username: user.username, id: user.id, avatarImageUrl: user.avatarImageUrl, access_token: token})
				
			} else {
				throw {name: "InvalidUsernameOrPassword"}
			}
    }

    catch(err) {
      next(err)
    }
  }

  static async register(req, res, next) {
    let input = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    try {
      let newUser = await User.create(input)

      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      })
    }

    catch(err) {
      next(err)
    }
  }

  static async userProfile(req, res, next) {
    try {
      let user = await User.findByPk(+req.params.id)

      if(!user) throw {name: "UserNotFound"}

      let {level, nextLevel} = user.showLevelAndNext()
      let profile = {
        username: user.username,
        level,
        exp: user.exp,
        nextLevel,
        cardsCleared: user.cardsCleared,
        desc: user.desc,
        avatarImageUrl: user.avatarImageUrl
      }
      res.status(200).json(profile)
    }

    catch(err) {
      next(err)
    }  
  }

  static async changeDesc(req, res, next) {
    let input = {
      desc: req.body.desc || ""
    }

    try {
      let updatedProfile = await User.update(input, {
        where: {
          id: +req.user.id
        }
      })

      if(!updatedProfile) throw {name: "UserNotFound"}

      res.status(200).json({success: 'Description has been updated'})
    }

    catch(err) {
      next(err)
    }  
  }

  static async changeAvatar(req, res, next) {
    let input = {
      avatarImageUrl: ""
    }

    if(req.body.random) {
      input.avatarImageUrl = generateAvatar('flashero')
    } else {
      input.avatarImageUrl = req.body.avatarImageUrl || ""
    }

    try {
      let updatedProfile = await User.update(input, {
        where: {
          id: +req.user.id
        },
				returning: true
      })

      if(!updatedProfile[0]) throw {name: "UserNotFound"}

      res.status(200).json(updatedProfile[1][0].avatarImageUrl)
    }

    catch(err) {
      next(err)
    }  
  }
}

module.exports = IndexController