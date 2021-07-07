const { News } = require("../models");
class NewsControllers {
  static async create(req, res, next) {
    console.log(req.body);
    const {
      title,
      description,
      url,
      author,
      image,
      language,
      category,
      published,
    } = req.body;
    try {
      const foundUser = await News.findOne({
        where: {
          title: title,
        },
      });

      if (foundUser) {
        next({ name: "news", message: "You've added this news" });
      } else {
        const created = await News.create({
          title: title,
          description: description,
          url: url,
          author: author,
          image: image,
          language: language,
          category: category,
          published: published,
        });
        res.status(201).json({ message: "succeed" });
      }
    } catch (err) {
      next(err);
    }
  }
  static async read(req, res, next) {
    try {
      const read = await News.findAll();
      res.status(200).json(read);
    } catch (err) {
      next(err);
    }
  }
  static async readOne(req, res, next) {
    const id = +req.params.id;
    try {
      const read = await News.findOne({
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
    const {
      title,
      description,
      url,
      author,
      image,
      language,
      category,
      published,
    } = req.body;

    try {
      const updated = await News.update(
        {
          title: title,
          description: description,
          url: url,
          author: author,
          image: image,
          language: language,
          category: category,
          published: published,
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
      const deleted = await News.destroy({
        where: {
          id: id,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = NewsControllers;
