const { User, Material, BuddyMaterial } = require('../models')
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
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = StudentController