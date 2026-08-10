import express from 'express'
import { addHealthRecord, deleteHealthRecord, editMyHealthRecordById, getMyHealthRecord, getMyHealthRecordById } from '../controllers/healthRecord.controller.js'
import { authUserCheck } from '../middlewares/authUser.middleware.js'

const healthRecordsRoute = express()

healthRecordsRoute.use(authUserCheck)

healthRecordsRoute.post('/', addHealthRecord)

healthRecordsRoute.get('/', getMyHealthRecord)

healthRecordsRoute.get('/:id', getMyHealthRecordById)

healthRecordsRoute.put('/:id', editMyHealthRecordById)

healthRecordsRoute.delete('/:id', deleteHealthRecord)


export default healthRecordsRoute