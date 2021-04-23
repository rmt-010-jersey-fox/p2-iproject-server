const {Patient, Disease, User} = require('../models/')

class PatientController {
    static async inputPatientData(req,res, next) {
        const {name, date_of_birth, gender, status, DiseaseId} = req.body
        // console.log(req.user.role);
        try {
            const patient = await Patient.create({
                name,
                date_of_birth,
                gender,
                status,
                DiseaseId,
                UserId: req.user.id,
            })
            res.status(201).json({
                name: patient.name,
                date_of_birth: patient.date_of_birth,
                gender: patient.gender,
                status: patient.status,
                DiseaseId: patient.DiseaseId,
                UserId: patient.UserId,
                message: 'Patient has been created'
            }) 
        } catch (err) {
           next(err)
        }
    }

    static async getPatientData(req,res, next) {
        try {
            const patient = await Patient.findAll({
                attributes: {exclude: ['createdAt', 'updatedAt']},
                order: [['id', 'ASC']],
                include: [{model: User, attributes: {exclude: ['createdAt', 'updatedAt','password']}, 
            }, {model: Disease, attributes: {exclude: ['createdAt', 'updatedAt']},
            }]
            }) 
            res.status(200).json(patient)
        } catch (err) {
            // console.log(err);
           next(err)
        }
    }

    static async getPatientById(req,res, next) {
        try {
           const getId = +req.params.id;
           const patient = await Patient.findByPk(getId, {
            attributes: {exclude: ['createdAt', 'updatedAt']},
            order: [['id', 'ASC']], 
           }) 
           res.status(200).json(patient)
        } catch (err) {
            next(err)
        }
    }

    static async updatePatientData(req,res, next) {
        try {
            const getId = +req.params.id
            // console.log(getId);
            const {name, date_of_birth, gender, DiseaseId} = req.body
            const updateProduct = {name, date_of_birth, gender, DiseaseId}

            const update = await Patient.update(updateProduct, {
                where: {
                    id: getId
                },
                attributes: {exclude: ['createdAt', 'updatedAt', 'UserId']},
                order: [['id', 'ASC']], 
                returning: true       
            })
            if (!update) {
                throw {
                    name: 'SequelizeValidationError'
                }
            } else {
                res.status(200).json({
                    id: update[1][0].id,
                    name: update[1][0].name,
                    date_of_birth: update[1][0].date_of_birth,
                    status: update[1][0].status,
                    UserId: update[1][0].UserId,
                    DiseaseId: update[1][0].DiseaseId,
                })       
            }

        } catch (err) {
            console.log(err);
           next(err)
        }
    }

    static async updateStatusToTrue(req,res, next) {
        try {
            const getId = +req.params.id

            const update = await Patient.update({status: true}, {    
                where: {
                    id: getId
                },
                returning: true
            })

            if (update[0] === 0) {
                throw {
                    message: 'cannot update other than status'
                }
            } else {
                console.log(update);
                res.status(200).json({
                    message: 'status has been updated'
                })
            }
        } catch (err) {
            console.log(err);
           next(err)
        }
    }

    static async updateStatusToFalse(req,res, next) {
        try {
            const getId = +req.params.id
            
            const update = await Patient.update({status: false}, {    
                where: {
                    id: getId
                },
                returning: true
            })

            if (update[0] === 0) {
                throw {
                    message: 'cannot update other than status'
                }
            } else {
                console.log(update);
                res.status(200).json({
                    message: 'status has been updated'
                })
            }
        } catch (err) {
            console.log(err);
           next(err)
        }
    }

    static async deletePatient(req,res, next) {
        try {
            const getId = +req.params.id
            const remove = await Patient.destroy({
                where: {
                    id: getId
                }
            })
            if (!remove) {
                throw {
                    name:'UserNotFound'
                }
            } else {
                res.status(200).json({message: 'Patient has been removed'})
            } 
        } catch (err) {
            next(err)
        }
    }
}

module.exports = PatientController