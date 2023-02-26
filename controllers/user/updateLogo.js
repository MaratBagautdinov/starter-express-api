import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export default asyncHandler(async (req, res) => {
	const user = await User.findById(req.userID)
	console.log(`Img data: ${req.body.title}`)
	console.log(`Img data: ${req.title}`)
	user.images = { ...user.images, logo: req.body.title }
	user.save()
	res.json({ logo: user.images })
})
