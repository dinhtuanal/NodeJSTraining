import { Request, Response } from 'express'
import Blog from '../models/blog'

export default new class BlogController{

    add = async (req:Request, res:Response)=>{
        await Blog.create(req.body)
        res.status(200).json({
            success: true,
            message: "Add success"
        })
    }

    getAll = async (req:Request, res:Response)=>{
        const blogs = await Blog.find();
        res.status(200).send(blogs)
    }

    getById = async (req:Request, res:Response)=>{
        const blog = await Blog.findById({_id: req.params.id})
        if(!blog){
            res.status(400).json({
                success: false,
                message: "Can not find blog",
            })
        }else{
            res.status(200).json({
                success: true,
                data: blog
            })
        }
    }

    update = async (req:Request, res:Response) =>{
        if(!req.body._id){
            res.status(404).json({
                success: false,
                message: "Can not find blog",
            })
        }else{
            await Blog.updateOne({
                title : req.body.title.image,
                image : req.body.image,
                summary : req.body.summary,
                content : req.body.content,
                categoryId : req.body.categoryId,
                updatedAt : req.body.updatedAt,
                createdBy : req.body.createdBy
            })
            res.status(200).json({
                success: true,
                message: "Update success"
            })
        }
    }

    delete = async (req:Request, res:Response)=>{
        if(!req.params.id){
            res.status(404).end("Can not find blog")
        }else{
            var result = await Blog.deleteOne({_id:req.params.id})
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
