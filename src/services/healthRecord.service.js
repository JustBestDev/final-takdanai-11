import { includes } from "zod"
import { prisma } from "../lib/prisma.js"


export const createHealthRecord = async (id, type, value) => {
    console.log('id from service:', id)
    const newHealthRecord = await prisma.HealtRecord.create({
        data: {
            userId: +id,
            type,
            value
        }
    })
    return newHealthRecord
}

export const getHealthRecord = async (id) => {
    const healthRecord = await prisma.HealtRecord.findMany({
        where: {
            userId: id
        },
        select: {
            id: true,
            userId: true,
            type: true,
            date: true
        }
    })
    return healthRecord
}

export const getHealthRecordById = async (id) => {
    const healthRecord = await prisma.HealtRecord.findMany({
        where: { id: id },
        select: {
            id: true,
            userId: true,
            type: true,
            value: true,
            date: true
        }
    })
    return healthRecord
}

export const editHealthRecord = async (id, type, value) => {
    const result = await prisma.HealtRecord.update({
        where: {
            id: id
        },
        data: {
            type,
            value
        }
    })
    return result
}

export const deleteHealthRecordService = async (id) => {
    await prisma.HealtRecord.delete({
        where: { id: id }
    })
}