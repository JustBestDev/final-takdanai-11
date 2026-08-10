import express from 'express'
import { register } from '../controllers/doctor.controller.js'
import { registerUser } from '../controllers/user.controller.js'

const registerRoute = express()

registerRoute.post('/doctor',register)
registerRoute.post('/user', registerUser)

export default registerRoute