import createError from 'http-errors'
import { createHealthRecord } from '../services/healthRecord.service.js'

export const addHealthRecord = async (req, res, next) => {
    const { id } = req.user
    console.log('id', id)
    if (!id) {
        return next(createError(401, "Error"))
    }
    const { type, value } = req.body
    const newHealthRecord = await createHealthRecord(id, type, value)
    res.status(201).json({
        message: "addHealRecord success",
        // healthRecord: {
        //     note: newHealthRecord.note
        // }
    })
}

export const getMyHealthRecord = (req, res) => {
    const { type, value, date } = req.user
    res.status(200).json({ type, value, date })
}