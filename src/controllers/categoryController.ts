import { Request, Response } from "express";
import Category from "../models/category"

export default new class CategoryController{

    add = async (req:Request, res:Response)=>{
        await Category.create(req.body)
        res.status(200).json({
            success:true,
            message: "Add success"
        })
    }

    getAll= async (req:Request, res:Response)=> {
        const categories = await Category.find()
        res.send(categories);
    }

    getById = async (req:Request, res:Response)=>{
        const category = await Category.findById({_id: req.params.id})
        if(!category){
            res.status(400).json({
                success: false,
                message: "Can not find categoryId",
            })
        }else{
            res.status(200).json({
                success: true,
                data: category
            })
        }
    }

    update = async (req:Request, res:Response) =>{
        if(!req.body._id){
            res.status(404).json({
                success: false,
                message: "Can not find categoryId",
            })
        }else{
            await Category.updateOne({
                name: req.body.name,
                desc: req.body.desc
            })
            res.status(200).json({
                success: true,
                message: "Update success"
            })
        }
    }

    delete = async (req:Request, res:Response)=>{
        if(!req.params.id){
            res.status(404).end("Can not find category")
        }else{
            const category = await Category.findById(req.params.id)
            var result = await Category.deleteOne({_id:req.params.id})
            if(!result){
                res.status(400).json({
                    success: false,
                    message: "Can not delete"
                })
            }else{
                res.status(200).json({
                    success:true ,
                    message: "Delete success"
                })
            }
        }
    }

}
