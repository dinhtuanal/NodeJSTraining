import student from '../routes/student/index'
import category from '../routes/category/index'
import blog from '../routes/blog/index'
import user from './auth/index'
import uploadFile from './uploadFiles/index'
import express from 'express'
import { getToken } from '../middlewares/jwt'
var route = express.Router()

route.use('/students', student)
route.use('/categories', getToken,category)
route.use('/blogs', getToken, blog)
route.use('/users', user)
route.use('/uploadFiles', uploadFile)

export default route
