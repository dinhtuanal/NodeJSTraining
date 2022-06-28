import student from '../routes/student/index'
import category from '../routes/category/index'
import express from 'express'
var app = express()
var route = express.Router()

route.use(student)
route.use(category)

export default route