import bcrypt from 'bcrypt'
import createError from 'http-errors'
import { createDoctor, editDoctor, findDoctorByUsername } from '../services/doctor.service.js'
import { createTokenDocter } from '../utils/jwt.js'


export const register = async (req, res, next) => {
    const { username, password, specialization } = req.body

    const user = await findDoctorByUsername(username)

    if (user) {
        return next(createError(400, "Username already exits"))
    }

    const hashPassword = await bcrypt.hash(password, 8)

    const newDoctor = await createDoctor(username, hashPassword, specialization)

    res.status(201).json({
        message: "Register successfully",
        user: newDoctor
    })
}

export const login = async (req, res, next) => {
    const { username, password } = req.body
    // console.log('req.body', req.body)

    const user = await findDoctorByUsername(username)
    // console.log('user', user)
    const isMatch = await bcrypt.compare(password, user.password)
    // console.log('isMatch', isMatch)

    if (!user || !isMatch) {
        return next(createError(401, "Invalid credentials"))
    }

    const token = await createTokenDocter(user)
    // console.log('token', token)
    res.status(200).json({
        message: "Login successfully",
        token: token,
        user: {
            id: user.id,
            user: user.username
        }
    })
}

export const getMeDoctor = (req, res) => {
    const { id, username, specialization, doctorNotes } = req.user
    res.status(200).json({ id, username, specialization, doctorNotes })
}

export async function editMeDoctor(req, res, next) {
    const { id } = req.user
    // console.log('req.body', req.body)
    const { username, password } = req.body
    if (!id || !username || !password) {
        return next(createError(400, "id and username and password are requires"))
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await editDoctor(id, username, hashPassword)
    res.status(200).json({ message: "Profile updated" })
}