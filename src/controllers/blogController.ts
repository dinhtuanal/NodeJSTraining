import { Request, Response } from 'express'
import Blog from '../models/blog'
import jwt from 'jsonwebtoken'

export default new class BlogController{
    getUserLogin = (req:Request, res:Response):string=>{
        const token = ((res as any).req.headers.authorization as string).slice(7)
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string)
        const userId = (decoded as any).userId as string
        return userId
    }
    
    add = async (req:Request, res:Response)=>{
        try{
            await Blog.create({
                ...req.body,
                createdBy: this.getUserLogin(req,res)
            })
            
            res.status(200).json({
                success: true,
                message: "Add success"
            })
        }catch(err){
            res.json({
                error: err
            })
        }
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
        try{
            if(!req.body._id){
                res.status(404).json({
                    success: false,
                    message: "Can not find blog",
                })
            }
            const blog = await Blog.findOne({_id: req.body._id})
            if(!blog){
                res.status(404).json({message: "Can not find blog"})
            }
            console.log(String(blog?.createdBy))
            if(String(blog?.createdBy) !== this.getUserLogin(req,res)){
                res.status(401).json({
                    success: false,
                    message: "Can not change this blog"
                })
            }else{
                await Blog.updateOne({
                    title : req.body.title.image,
                    image : req.body.image,
                    summary : req.body.summary,
                    content : req.body.content,
                    categoryId : req.body.categoryId,
                    updatedAt : Date.now(),
                })
                res.status(200).json({
                    success: true,
                    message: "Update success"
                })
            }
        }catch(err){
            res.status(400).json({
                error: err
            })
        }

    }

    delete = async (req:Request, res:Response)=>{
        try{
            if(!req.params.id){
                res.status(404).end("Can not find blog")
            }
            const blog = await Blog.findOne({_id: req.params.id})
            // console.log(blog)
            if(String(blog?.createdBy) !== this.getUserLogin(req,res)){
                // console.log(this.getUserLogin(req,res))
                res.status(401).json({
                    success: false,
                    message: "Can not delete blog"
                })
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
            
        }catch(err){
            res.status(400).json({
                error: err
            })
        }
    }
}
