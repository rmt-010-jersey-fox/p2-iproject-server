const {Room} = require('../models')

class RoomController{
    static getRoom(req,res,next){
        Room.findAll()
        .then(room=>{
            res.status(200).json({room})
        }).catch(err=>{
            next(err)
        })
    }

    static postRoom(req,res,next){
        let createRoom = {
            name:req.body.name,
            image_url:req.body.image_url,
            price:req.body.price,
            Userid:req.user.id
        }
        Room.create(createRoom)
        .then(room=>{
            res.status(201).json({product})
        }).catch(err=>{
            next(err)
        })
    }

    static putRoom(req,res,next){
        let id = req.params.id
        let updateRoom = {
            name:req.body.name,
            image_url:req.body.image_url,
            price:req.body.price,
            Userid:req.user.id
        }
        Room.update(updateRoom,{where:{id},returning:true})
        .then(data=>{
            res.status(200).json(data)
        }).catch(err=>{
            next(err)
        })
    }

    static deleteRoom(req,res, next){
        let id = req.params.id
        Room.destroy({where:{id}})
        .then(room=>{
            if(!room){
                res.status(404).json({message:err.message})
            }else{
                res.status(200).json({message:"Room Succes to Delete"})
            }
        }).catch(err=>{
            next(err)
        })
    }

    static getRoomId(req,res,next){
        let id = req.params.id
        Room.findByPk(id)
        .then(room=>{
            if(!room){
                res.status(400).json({message:"room not found"})
            }else{
                res.status(200).json({room})
            }
        }).catch(err=>{
            next(err)
        })
    }
}


module.exports = RoomController