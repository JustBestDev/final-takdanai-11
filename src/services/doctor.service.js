import { prisma } from "../lib/prisma.js"

export const findDoctorByUsername = async (username) => {
    const user = await prisma.doctor.findUnique({
        where: { username: username }
    })
    return user
}

export const findDoctorById = async (id) => {
    const user = await prisma.doctor.findUnique({
        where: { id: id }
    })
    return user
}

export const createDoctor = async (username, hashPassword, specialization) => {
    const newUser = await prisma.doctor.create({
        data: {
            username,
            password: hashPassword,
            specialization
        }
    })
    return newUser
}

export const editDoctor = async (id, username, hashPassword) => {
    const result = await prisma.doctor.update({
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