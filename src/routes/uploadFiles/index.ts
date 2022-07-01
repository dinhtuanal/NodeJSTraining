import express, { NextFunction, Request, Response } from 'express'
import multer from 'multer'

const route = express.Router()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jepg' || file.mimetype === 'image/png'){
            cb(null, 'src/images')
        }else{
            cb(null, '')
        }
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({ storage: storage })

route.post('/', upload.single("image") ,(req:Request, res:Response, next: NextFunction)=>{
    console.log(req.file?.path)
    res.json({
        success: true,
        message: "Upload file success"
    })
})
route.post('/multiple', upload.array("images", 3) ,(req:Request, res:Response, next: NextFunction)=>{
    console.log("Success")
    res.json({
        success: true,
        message: "Upload file success"
    })
})

export default route;
