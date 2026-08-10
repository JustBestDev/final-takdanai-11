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