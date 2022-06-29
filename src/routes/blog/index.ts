import blogController from '../../controllers/blogController'
import express from 'express'
const route = express.Router()

route.get('/', blogController.getAll)
route.get('/:id', blogController.getById)
route.post('/', blogController.add)
route.put('/', blogController.update)
route.delete('/:id', blogController.delete)

export default route
