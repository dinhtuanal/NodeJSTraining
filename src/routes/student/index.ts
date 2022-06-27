import express from 'express'
const route = express.Router()
import studentController from '../../app/controllers/studentController'

route.get('/students/',studentController.getAll)
route.post('/students/',studentController.add)
route.get('/students/:id',studentController.getById)

export default route
