import express from 'express'
const route = express.Router()
import categoryController from '../../controllers/categoryController'

route.get('/categories' ,categoryController.getAll)
route.get('/categories/:id' ,categoryController.getById)
route.post('/categories' ,categoryController.add)
route.put('/categories', categoryController.update)
route.delete('/categories/:id', categoryController.delete)

export default route
