import express from 'express'
import { login } from '../controllers/doctor.controller.js'
import { loginUser } from '../controllers/user.controller.js'

const loginRoute = express()

loginRoute.post('/doctor', login)
loginRoute.post('/user', loginUser)

export default loginRoute