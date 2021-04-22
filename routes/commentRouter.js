const express = require("express");
const commentRouter = express.Router();
const CommentController = require("../controllers/commentController.js");
const {commentAuthorization} = require("../middlewares/auth.js")

// :imageId
commentRouter.post("/comments/:imageId", CommentController.postComment);
commentRouter.get("/comments/:imageId", CommentController.showComments);
commentRouter.patch("/comments/:id", commentAuthorization ,CommentController.editComment);
commentRouter.delete("/comments/:id", commentAuthorization, CommentController.deleteComment);





module.exports = commentRouter;