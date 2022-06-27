import student from '../routes/student/index'
import express from 'express'
var app = express()
var route = express.Router()

route.use(student)

export default route