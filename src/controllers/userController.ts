import { Request, Response } from "express";
import User from '../models/user'
import bcrypt from 'bcrypt'

export default new class UserController{
    register = async (req:Request, res:Response)=>{
        const password = await bcrypt.hash(req.body.password, 10)
        try{
            const response = await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password,
                email: req.body.email,
            })
            console.log(response)
            res.status(200).json({
                success: true,
                message: "Register success"
            })
        }catch(error:any){
            if(error.code === 11000){
                res.json({
                    success: false,
                    message: "username or email already exists"
                })
            }
            res.json({
                success: false,
                message: error,
            })
        }
    }

    login = async (req:Request, res:Response) => {
        const { username, password} = req.body
        
        if(!username || !password){
            res.status(400).json({
                message: "Enter username and password !"
            })
        }

        const userLogin = await User.findOne({ username })
        
        if(!userLogin){
            res.status(400).json({
                message: "Username not exists !"
            })
        }else{
            if(await bcrypt.compare(password, userLogin.password)){
                res.json({message: "Login success"})
            }
        }
        console.log(password)
    }

    getAll =async (req:Request, res:Response) => {
        
    }
}
