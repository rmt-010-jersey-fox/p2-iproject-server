const { User, Material, BuddyMaterial, Booking, BuddySchedule, BuddyProfile } = require('../models')
const axios = require('axios')
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

    static async getBuddyById (req, res, next) {
        try {
            const gitlabAPI = "https://api.github.com/users/";
            const id = +req.params.id
            let data = await BuddyProfile.findOne({
                where : {
                    UserId : id
                },
                include : {
                    model : User,
                    attributes : [
                        'id', 'email', 'role', 'first_name', 'last_name', 'imgUrl'
                    ]
                }
            })

            let schedule = await BuddySchedule.findAll({
                where : {
                    UserId : id,
                    status : 'available'
                }
            })
            if (schedule) {
                data.dataValues.Schedule = schedule;
                if (data.GithubUser) {
                    let repoAPI = gitlabAPI + `${data.GithubUser}/repos`
    
                    let listRepo = []
                    const getRepo = await axios({
                        method : 'get',
                        url : repoAPI
                    })
                    if (getRepo.data) {
                        getRepo.data.forEach(el => {
                            let repoinfo = {
                                name : el.name,
                                fullname : el.full_name,
                                owner : el.owner.login,
                                avatar_url : el.owner.avatar_url,
                                link : el.html_url,
                                description : el.description
                            }
                            listRepo.push(repoinfo)
                        });
                        data.dataValues.Github = listRepo
                        res.status(200).json(data)
                    } else {
                        res.status(200).json(data)
                    } 
                } else {
                    res.status(200).json(data)
                }
            }
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
                },
                include : [
                    {
                        model : User
                    },
                    {
                        model : BuddyMaterial,
                        include : [
                            {
                                model : Material
                            }
                        ]
                    },
                    {
                        model : BuddySchedule,
                        include : [
                            {
                                model : User
                            }
                        ]
                    }
                ]
            })
            res.status(200).json(schedule)
        } catch (error) {
            next(error)
        }
    }

    static async cancelBooking (req, res, next) {
        try {
            //findOne
            const id = +req.params.id;
            let findBooking = await Booking.findOne({
                where : {
                    id : id
                }
            })
            if (findBooking) {
                let data = {
                    status : 'canceled'
                }
                let update = await Booking.update(data, {
                    where : {
                        id : id
                    },
                    returning : true
                })
                if (update) {
                    await BuddySchedule.update(
                        { status : 'available'},
                        { where : {
                            id : findBooking.BuddyScheduleId
                        }}
                    )
                    res.status(200).json(update[1]);
                }
            } else {
                throw {
                    name : "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteHistory (req, res, next) {
        // delete booking that has "canceled" status
        try {
            const id = +req.params.id
            //findOne
            let findBooking = await Booking.findOne({
                where : { id : id }
            })
            if (findBooking) {
                if (findBooking.status === "canceled") {
                    let deleteBooking = await Booking.destroy({
                        where : { id : id }
                    })
                    res.status(200).json({ message : "Delete is success"})
                } else {
                    throw {
                        name : "unable action"
                    }
                }
            } else {
                throw {
                    name : "Not Found"
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = StudentController