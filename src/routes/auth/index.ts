import authController from '../../controllers/authController'
import express from 'express'
const route = express.Router()

route.post('/regiter', authController.register)
route.post('/login', authController.login)

export default route
