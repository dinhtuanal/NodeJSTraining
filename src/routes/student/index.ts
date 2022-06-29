import express from 'express'
const route = express.Router()
import studentController from '../../controllers/studentController'

route.get('/',studentController.getAll)
route.post('/',studentController.add)
route.get('/:id',studentController.getById)
route.put('/',studentController.update)
route.delete('/:id',studentController.delete)

export default route
