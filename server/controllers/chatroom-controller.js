const { ChatRoom, User } = require('../models')
class ChatroomController {
	static async getChatroom(req, res, next) {
		try {
			let chatroom = await ChatRoom.findAll({ include: { model: User } })
			res.status(201).json({
				rooms: chatroom,
			})
		} catch (error) {
			console.log(error)
			next(error)
		}
	}
	static async editChatroom(req, res, next) {
		const { id } = req.userAuth
		const { status, title } = req.body
		const roomId = req.params.id
		try {
			let room = await ChatRoom.updata(
				{
					status,
					title,
				},
				{ where: { id: roomId } }
			)
			if (!room[0]) {
				next({ message: 'failed to update room' })
			} else {
				res.status(200).json({
					message: 'Successfully update room',
				})
			}
		} catch (error) {
			console.log(error)
			next(error)
		}
	}
}

module.exports = ChatroomController
