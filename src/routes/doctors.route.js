import express from 'express'
import { editMeDoctor, getMeDoctor } from '../controllers/doctor.controller.js'
import { authDoctorCheck } from '../middlewares/authDoctor.middleware.js'

const doctorRoute = express()

doctorRoute.use(authDoctorCheck)
doctorRoute.get('/me', getMeDoctor)
doctorRoute.put('/me', editMeDoctor)

export default doctorRoute