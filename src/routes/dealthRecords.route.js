import express from 'express'
import { addHealthRecord } from '../controllers/healthRecord.controller.js'
import { authUserCheck } from '../middlewares/authUser.middleware.js'

const healthRecordsRoute = express()

healthRecordsRoute.use(authUserCheck)

healthRecordsRoute.post('/', addHealthRecord)

healthRecordsRoute.get('/', (req, res) => {
    res.send('healthRecordsRoute')
})

healthRecordsRoute.get('/:id', (req, res) => {
    res.send('healthRecordsRoute')
})

healthRecordsRoute.put('/:id', (req, res) => {
    res.send('healthRecordsRoute')
})

healthRecordsRoute.delete('/:id', (req, res) => {
    res.send('healthRecordsRoute')
})


export default healthRecordsRoute