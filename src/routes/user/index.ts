import userController from '../../controllers/userController'
import express from 'express'
const route = express.Router()

route.post('/regiter', userController.register)
route.post('/login', userController.login)

export default route
