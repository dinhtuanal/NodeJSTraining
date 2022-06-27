import { NextFunction, Request, Response } from "express";
import Student from "../models/Student";

export default new class StudentController{
    getAll = async (req:Request, res:Response, next:NextFunction)=>{
        const listStudent = await Student.find()
        res.json({
            data: listStudent
        })
    }

    add = async(req:Request, res:Response)=>{
        await Student.create(req.body)
        res.status(200).json({
            success: true,
            notice: 'Thêm mới thành công'
        })
    }

    getById = async (req:Request, res:Response, next:NextFunction )=>{
        const std = await Student.findById(req.params.id);
        if(!std){
            res.status(404).json({
                success: false,
                notice: 'Can not find student'
            })
        }else{
            res.status(200).json({
                success: true,
                data: std
            })
        }
    }
}