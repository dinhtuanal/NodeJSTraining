import express from 'express'
const route = express.Router()
import categoryController from '../../controllers/categoryController'

route.get('/' ,categoryController.getAll)
route.get('/:id' ,categoryController.getById)
route.post('/' ,categoryController.add)
route.put('/', categoryController.update)
route.delete('/:id', categoryController.delete)

export default route
