import createError from 'http-errors'
import { createHealthRecord, deleteHealthRecordService, editHealthRecord, getHealthRecord, getHealthRecordById } from '../services/healthRecord.service.js'

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

export const getMyHealthRecord = async (req, res) => {
    const { id } = req.user
    const healthRecord = await getHealthRecord(id)
    res.status(200).json(healthRecord)
}

export const getMyHealthRecordById = async (req, res) => {
    const { id } = req.user
    const myHealthRecordId = +req.params.id
    const healthRecord = await getHealthRecordById(myHealthRecordId)
    if (!healthRecord) {
        return next(createError(404, "healthRecord not found"))
    }
    res.status(200).json(healthRecord)
}

export async function editMyHealthRecordById(req, res, next) {
    const myHealthRecordId = +req.params.id
    // console.log('req.body', req.body)
    const { type, value } = req.body
    if (!myHealthRecordId || !type || !value) {
        return next(createError(400, "id and username and password are requires"))
    }
    await editHealthRecord(myHealthRecordId, type, value)
    res.status(200).json({ message: "Health Record updated" })
}

export const deleteHealthRecord = async (req,res,next) => {
    const myHealthRecordId = +req.params.id
    await deleteHealthRecordService(myHealthRecordId)
    res.status(200).json({ message: "Health Record delete" })

}