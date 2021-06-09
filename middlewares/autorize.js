const { Comment } = require("../models");

async function autorize(req, res, next) {
  try {
    let commentId = req.params.commentId;
    let { UserId } = req.loggedUser;

    const thisComment = await Comment.findByPk(commentId);

    if (!thisComment) {
      next({ name: "Not Found" });
    }

    if (thisComment.UserId === UserId) {
      next();
    } else {
      next({ name: "invalid token" });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = autorize;
