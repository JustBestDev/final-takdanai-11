import { prisma } from "../lib/prisma.js"

export const findUserByUsername = async (username) => {
    const user = await prisma.user.findUnique({
        where: { username: username }
    })
    return user
}

export const findUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id: id }
    })
    return user
}

export const createUser = async (username, hashPassword) => {
    const newUser = await prisma.user.create({
        data: {
            username,
            password: hashPassword
        }
    })
    return newUser
}

export const editUser = async (id, username, hashPassword) => {
    const result = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            username,
            password: hashPassword
        }
    })
    return result
}