const { User, Material, BuddyMaterial, Booking, BuddySchedule } = require('../models')
class StudentController {
    static async getBuddy (req, res, next) {
        try {
            let data = await User.findAll({
                where : {
                    role : "buddy"
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getMaterials (req, res, next) {
        try {
            let data = await Material.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getBuddyMaterials (req, res, next) {
        try {
            let data = await BuddyMaterial.findAll({
                include : [
                    {
                        model : User
                    },
                    {
                        model : Material
                    }
                ]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getBuddyMaterialsById (req, res, next) {
        try {
            const materialId = +req.params.id;
            let data = await BuddyMaterial.findAll({
                include : [
                    {
                        model : User
                    },
                    {
                        model : Material
                    }
                ],
                where : {
                    MaterialId : materialId
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async booking (req, res, next) {
        try {
            /**
             * data needed : UserId, BuddyMaterialId, BuddyScheduleId
             */
            let data = {
                UserId : req.loggedUser.id,
                BuddyMaterialId : +req.body.BuddyMaterialId,
                BuddyScheduleId : +req.body.BuddyScheduleId
            }
            let book = await Booking.create(data)
            if (book) {
                let dataUpdate = {
                    status : "unavailabe"
                }
                let changeBuddyStatus = await BuddySchedule.update(dataUpdate, {
                    where : {
                        id : +req.body.BuddyScheduleId
                    },
                    returning : true
                })
                res.status(201).json({ message : "Congratulation, you have successfully book a schedule!"})
            }
            // res.status(201).json({ message : "Congratulation, you have successfully book a schedule!"})
        } catch (error) {
            next(error)
        }
    }

    static async schedule (req, res, next) {
        try {
            let schedule = await Booking.findAll({
                where : {
                    UserId : req.loggedUser.id
                }
            })
            res.status(200).json(schedule)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = StudentController