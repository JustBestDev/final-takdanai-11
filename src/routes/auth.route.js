import express from 'express'
import registerRoute from './register.route.js'
import loginRoute from './login.route.js'

const authRoute = express()

authRoute.use('/register', registerRoute)
authRoute.use('/login', loginRoute)

export default authRoute