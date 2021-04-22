const {Disease} = require('../models/')

class DiseaseController {
    static async inputDiseaseData(req,res, next) {
        const {name, level_of_risk, status} = req.body
        // console.log(req.user.id);
        try {
            const disease = await Disease.create({
                name,
                level_of_risk,
                status,
            })
            res.status(201).json({
                name: disease.name,
                level_of_risk: disease.level_of_risk,
                message: 'Disease has been registered'
            }) 
        } catch (err) {
           next(err)
        }
    }

    static async showDiseaseData(req,res, next) {
        try {
            const disease = await Disease.findAll({
                attributes: {exclude: ['createdAt', 'updatedAt']},
                order: [['id', 'ASC']],
            })
            res.status(200).json(disease)
        } catch (err) {
            console.log(err);
           next(err)
        }
    }

    static async deleteDisease(req,res, next) {
        try {
            const getId = +req.params.id
            const remove = await Disease.destroy({
                where: {
                    id: getId
                }
            })
            if (!remove) {
                throw {
                    name:'UserNotFound'
                }
            } else {
                res.status(200).json({message: 'Disease has been removed'})
            } 
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DiseaseController