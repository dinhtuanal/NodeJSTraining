import express from 'express'
const route = express.Router()
import studentController from '../../controllers/studentController'

route.get('/students/',studentController.getAll)
route.post('/students/',studentController.add)
route.get('/students/:id',studentController.getById)
route.put('/students/',studentController.update)
route.delete('/students/:id',studentController.delete)

export default route
