import express, { NextFunction, Request, Response } from 'express'
import { connectDB } from './config/db'
import route from './routes/index'
const PORT = process.env.PORT

const app = express()
app.use(express.json())
connectDB()

app.use(route)

app.listen(PORT || 3000)
