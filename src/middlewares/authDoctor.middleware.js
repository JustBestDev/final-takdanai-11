import createError from 'http-errors'
import { verifyTokenDoctor } from '../utils/jwt.js'
import { findDoctorById } from '../services/doctor.service.js'

export const authDoctorCheck = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) { return next(createError(401, "Unauthorized")) }
    const token = authorization.split(" ")[1]

    const payload = await verifyTokenDoctor(token)

    const user = await findDoctorById(payload.id)
    if (!user) {
        return next(createError(401, "Unauthorized"))
    }

    req.user = user
    next()
}