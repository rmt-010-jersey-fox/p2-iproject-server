const {Booking,Room,User} = require('../models')


class BookController{
    static async getBook(req,res,next){
        try{
            const id = req.user.id
            console.log(id,'<<<<<<<<<<,')
            const book = await Booking.findAll({where:{UserId:id},include:Room})
            res.status(200).json(book)
        }catch(err){
            next(err)
        }
    }
    
    static async addBook(req,res,next){
        try{
            const book = await Booking.findOne({
                where:{
                    UserId:req.user.id,
                    RoomId:req.body.RoomId
                }
            }) 
            if(!book){
                const room = await Room.findOne({where:{id:req.body.RoomId}})
                if(room.availableRoom == 0) {
                    throw {status:400, message:"room not available"}
                }else {
                    const UserId = req.user.id
                    await Booking.create({RoomId: room.id, UserId, availableRoom:1})
                    res.status(201).json({message:"add to Booking List !"})
                }
            }else{
                const room = await Room.findOne({where:{id:req.body.RoomId}})
                if(room.availableRoom == 0){
                    throw {status:400, message:"room not available"}
                }else{
                    Booking.duration +=1
                    await Booking.save()
                    res.status(200).json({message:"add to Booking List !"})
                }
            }
        }catch(err){
            next(err)
            console.log(err, "<<<<<<<<<<<<<<<,")
        }
    }
    
    static async deleteBook (req,res,next){
        try{
            const findBook = await Booking.findByPk(req.params.id)
            if(!findBook){
                throw{status:404,message:"Not Found"}
            }else{
                await Booking.destroy({where:{id:findBook.id}})
                res.status(200).json({message:"Success to Delete"})
            }
        }catch(err){
            next(err)
        }
    }
}

module.exports = BookController