import express from 'express'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/users.route.js'
import doctorRoute from './routes/doctors.route.js'
import healthRecordsRoute from './routes/dealthRecords.route.js'
import { pathNotFound } from './middlewares/pathNotFound.middleware.js'
import { errorHandler } from './middlewares/errorHandler.middleware.js'

const app = express()

app.use(express.json())

app.get('/test', (req, res) => {
    res.send('Hello from server')
})

app.use('/auth', authRoute) // เสร็จแย้ว

app.use('/users', userRoute) //เสร็จ

app.use('/doctors', doctorRoute) //แล้ว

app.use('/health-records', healthRecordsRoute)

app.use(pathNotFound)

app.use(errorHandler)

export default app