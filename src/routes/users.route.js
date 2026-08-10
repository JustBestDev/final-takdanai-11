import express from 'express'
import { editMeUser, getMeUser } from '../controllers/user.controller.js'
import { authUserCheck } from '../middlewares/authUser.middleware.js'

const userRoute = express()

userRoute.use(authUserCheck)
userRoute.get('/me', getMeUser)
userRoute.put('/me', editMeUser)

export default userRoute