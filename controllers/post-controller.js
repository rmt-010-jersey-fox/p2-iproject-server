const {
    Post
} = require('../models')

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dcudqbeko', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

class PostController {
    static async getPosts(req, res, next) {
        try {
            const posts = await Post.findAll({
                where: {
                    UserId: req.loggedUser.id
                },
                order: [
                    ['id','ASC']
                ]
            })
            res.status(200).json({
                message: 'Read Post Success',
                data: posts
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async getPostById(req, res, next) {
        try {
            const post = await Post.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Read Post Success',
                data: post
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async uploadPost(req, res, next) {
        try {
            if(!req.file) throw { status: 400, message: "Must Choose an Image"}
            if(!req.body.caption) throw { status: 400, message: "Must Give a Caption"}

            req.file.path = req.file.path.replace('\\', '/')

            cloudinary.uploader.upload(req.file.path, async (err, image) => {
                try {
                    if(!err) {
                        const addPost = await Post.create({
                            filePath: image.secure_url,
                            caption: req.body.caption,
                            UserId: req.loggedUser.id
                        })
    
                        res.status(201).json({
                            message: 'Upload Success',
                            data: addPost
                        })
                    } else {
                        throw { status:500, message: "Something on the cloud happened"}
                    }
                } catch (err) {
                    next(err)
                }
            })

        } catch (err) {
            next(err)
        }
    }

    static async editCaption(req, res, next) {
        try {
            const editedPost = await Post.findOne({
                where: {
                    id: req.params.id
                }
            })
            editedPost.caption = req.body.caption
            editedPost.save()
            res.status(200).json({
                message: 'Edit Caption Success',
                data: editedPost
            })
        } catch (err) {
            next(err)
        }
    }

    static async deletePost(req, res, next) {
        try {
            const deleted = await Post.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Delete Post Success',
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = PostController