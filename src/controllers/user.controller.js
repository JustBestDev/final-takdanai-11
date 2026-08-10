import bcrypt from 'bcrypt'
import createError from 'http-errors'
import { createUser, editUser, findUserByUsername } from '../services/user.service.js'
import { createTokenUser } from '../utils/jwt.js'


export const registerUser = async (req, res, next) => {
    const { username, password } = req.body

    const user = await findUserByUsername(username)

    if (user) {
        return next(createError(400, "Username already exits"))
    }

    const hashPassword = await bcrypt.hash(password, 8)

    const newUser = await createUser(username, hashPassword)

    res.status(201).json({
        message: "Register successfully",
        user: newUser
    })
}

export const loginUser = async (req, res, next) => {
    const { username, password } = req.body
    // console.log('req.body', req.body)

    const user = await findUserByUsername(username)
    // console.log('user', user)
    const isMatch = await bcrypt.compare(password, user.password)
    // console.log('isMatch', isMatch)

    if (!user || !isMatch) {
        return next(createError(401, "Invalid credentials"))
    }

    const token = await createTokenUser(user)
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

export const getMeUser = (req, res) => {
    const { id, username, doctorNotes, healtRecords } = req.user
    res.status(200).json({ id, username, doctorNotes, healtRecords })
}

export async function editMeUser(req, res, next) {
    const { id } = req.user
    // console.log('req.body', req.body)
    const { username, password } = req.body
    if (!id || !username || !password) {
        return next(createError(400, "id and username and password are requires"))
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await editUser(id, username, hashPassword)
    res.status(200).json({ message: "Profile updated" })
}
