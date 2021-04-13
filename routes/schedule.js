const scheduleRouter = require('express').Router()
const ScheduleCtrl = require('../controllers/schedule')
const authenticate = require('../middlewares/authentication')
const authorize = require('../middlewares/authorization')

scheduleRouter.use(authenticate)
scheduleRouter.get('/', authorize, ScheduleCtrl.getSchedules)
scheduleRouter.post('/', authorize, ScheduleCtrl.postSchedules)
scheduleRouter.get('/:id', authorize, ScheduleCtrl.getById)
scheduleRouter.patch('/:id', authorize, ScheduleCtrl.patchById)
scheduleRouter.put('/:id', authorize, ScheduleCtrl.putById)
scheduleRouter.delete('/:id', authorize, ScheduleCtrl.deleteById)

module.exports = scheduleRouter