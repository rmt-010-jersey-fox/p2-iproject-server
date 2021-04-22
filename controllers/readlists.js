const { Readlist, News } = require("../models");

class ReadlistControllers {
  static async create(req, res, next) {
    const { NewsId } = req.body;
    try {
      const created = await Readlist.create({
        NewsId: NewsId,
        UserId: req.loggedUser.id,
        status: "plan to read",
      });

      res.status(201).json({ message: "succeed" });
    } catch (err) {
      next(err);
    }
  }
  static async read(req, res, next) {
    try {
      const read = await Readlist.findAll({
        include: News,
      });
      res.status(200).json(read);
    } catch (err) {
      next(err);
    }
  }
  static async readOne(req, res, next) {
    const id = +req.params.id;
    try {
      const read = await Readlist.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json(read);
    } catch (err) {
      next(err);
    }
  }
  static async update(req, res, next) {
    const id = +req.params.id;
    const { status } = req.body;

    console.log(id, req.body);
    try {
      const updated = await Readlist.update(
        {
          status: status,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (updated) {
        res.status(200).json({ message: "succeed Update" });
      }
    } catch (err) {
      next(err);
    }
  }
  static async delete(req, res, next) {
    const id = +req.params.id;
    try {
      const deleted = await Readlist.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "succeed delete" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ReadlistControllers;
