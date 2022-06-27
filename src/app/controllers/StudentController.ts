import { Request, Response } from "express";
import Student from "../models/Student";

export default new class StudentController {
    getAll = async (req: Request, res: Response) => {
        const listStudent = await Student.find()
        res.send(listStudent)
    }

    add = async (req: Request, res: Response) => {
        await Student.create(req.body)
        res.status(200).json({
            success: true,
            message: 'Thêm mới thành công'
        })
    }

    getById = async (req: Request, res: Response) => {
        const std = await Student.findById(req.params.id);
        if (!std) {
            res.status(404).json({
                success: false,
                message: 'Can not find student'
            })
        } else {
            res.status(200).json({
                success: true,
                data: std
            })
        }
    }

    update = async (req: Request, res: Response) => {
        const std = await Student.findById(req.body._id)
        console.log(req.body._id)
        if (!std) {
            res.status(404).json({
                success: false,
                message: 'Can not find student'
            })
        } else {
            //Chưa xử lý được nó lỗi quá nhiều
        }
    }

    delete = async (req: Request, res: Response) => {
        const std = await Student.findById(req.params.id)
        if (!std) {
            res.status(404).json({
                success: false,
                message: "Can not find student id"
            })
        }
        else {
            await Student.deleteOne({ _id: req.params.id })
            res.status(200).json({
                success: true,
                message: "Delete success"
            })
        }
    }

}