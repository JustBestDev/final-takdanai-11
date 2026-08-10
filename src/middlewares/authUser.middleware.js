import createError from 'http-errors'
import { verifyTokenUser } from '../utils/jwt.js'
import { findUserById } from '../services/user.service.js'

export const authUserCheck = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) { return next(createError(401, "Unauthorized")) }
    const token = authorization.split(" ")[1]

    const payload = await verifyTokenUser(token)

    const user = await findUserById(payload.id)
    if (!user) {
        return next(createError(401, "Unauthorized"))
    }

    req.user = user
    next()
}