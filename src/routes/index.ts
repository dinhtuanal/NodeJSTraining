import student from '../routes/student/index'
import category from '../routes/category/index'
import blog from '../routes/blog/index'
import user from '../routes/user/index'
import express from 'express'
var route = express.Router()

route.use('/students',student)
route.use('/categories',category)
route.use('/blogs',blog)
route.use('/users', user)

export default route
