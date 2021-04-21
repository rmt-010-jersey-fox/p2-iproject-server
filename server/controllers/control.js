const { User, Comment, Watchlist } = require("../models");
const { ValidationError } = require("sequelize");
const axios = require("axios");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      const newUser = await User.create({
        email,
        password,
      });

      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (err) {
      if (err instanceof ValidationError) {
        next(err);
      } else {
        next(err);
      }
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
          res.status(200).json({ id: user.id, token });
        } else {
          console.log("okes");
          next({ name: "invalid email or password" });
        }
      } else {
        next({ name: "invalid email or password" });
      }
    } catch (err) {
      // console.log(err);
      next({ err });
    }
  }

  static async postComment(req, res, next) {
    try {
      const { comment } = req.body;
      const imdbId = req.params.imdbID;
      const { UserId } = req.loggedUser;
      console.log(comment, imdbId);
      const newComment = await Comment.create({
        comment,
        UserId,
        imdbId,
      });

      res.status(201).json(newComment);
    } catch (err) {
      if (err instanceof ValidationError) {
        next(err);
      } else {
        next(err);
      }
    }
  }

  static async findAll(req, res, next) {
    try {
      const imdbID = req.params.imdbID;
      const comments = await Comment.findAll({
        where: {
          imdbId: imdbID,
        },
      });

      res.status(200).json(comments);
    } catch (err) {
      if (err instanceof ValidationError) {
        next(err);
      } else {
        next(err);
      }
    }
  }

  // static async findOne(req, res) {
  //   try {
  //     let commentId = +req.params.commentId;
  //     const comment = await Comment.findByPk(commentId);

  //     res.status(200).json(comment);
  //   } catch (err) {
  //     res.status(500).json({ err });
  //   }
  // }

  static async remove(req, res, next) {
    try {
      let commentId = req.params.commentId;

      const deleted = await Comment.destroy({
        where: {
          id: commentId,
        },
      });

      res.status(200).json({ message: "comment deleted" });
    } catch (err) {
      next(err);
    }
  }

  // static async replace(req, res, next) {
  //   try {
  //     const { comment } = req.body;

  //     const replace = await Comment.update(
  //       { comment },
  //       {
  //         where: {
  //           id: +req.params.commentId,
  //         },
  //         returning: true,
  //       }
  //     );

  //     res.status(200).json({ replace });
  //   } catch (err) {
  //     if (err instanceof ValidationError) {
  //       next(err);
  //     } else {
  //       next(err);
  //     }
  //   }
  // }

  static findMovie(req, res, next) {
    const { search } = req.body;
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=6a11e755`)
      .then((response) => {
        res.status(200).json(response.data.Search);
      })
      .catch((err) => {
        next(err);
      });
  }

  static async details(req, res, next) {
    const imdbID = req.params.imdbID;

    axios
      .get(`http://www.omdbapi.com/?apikey=6a11e755&i=${imdbID}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static async postWatch(req, res) {
    try {
      const { UserId } = req.loggedUser;
      const MovieId = req.params.imdbID;
      console.log(UserId, MovieId);
      const watch = await Watchlist.create({
        UserId,
        MovieId,
      });

      res.status(201).json(watch);
    } catch (err) {
      next(err);
    }
  }

  static async getWatch(req, res) {
    try {
      const { UserId } = req.loggedUser;
      const watch = await Watchlist.findAll({
        where: {
          UserId,
        },
      });

      res.status(200).json(watch);
    } catch (err) {
      next(err);
    }
  }

  static latest(req, res, next) {
    console.log("============");
    axios
      .get(`https://api-filmapik.herokuapp.com/latest`)
      .then(({ data }) => {
        res.status(200).json(data.result);
      })
      .catch((err) => {
        next(err);
      });
  }

  static async removeWatchlist(req, res, next) {
    try {
      const id = +req.params.id;

      const deleted = await Watchlist.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ msg: "watchlist deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
