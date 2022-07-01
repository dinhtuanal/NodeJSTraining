import { NextFunction, Request, Response } from "express";
import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default new class AuthController{
    register = async (req:Request, res:Response)=>{
        if(req.body.password.length < 6 || req.body.password.length > 255){
            res.json({
                success: false,
                message: "Password more than 6 charaters and less than 255 charaters!"
            })
        }
        const password = await bcrypt.hash(req.body.password, 10)
        try{
            const response = await User.create({
                ...req.body,
                password
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
            if(!await bcrypt.compare(password, userLogin.password)){
                res.status(404).json({
                    success: false,
                    message: "Username or password incorrect"
                })
            }
            const token = jwt.sign(
                { 
                    userId: userLogin._id,
                },
                process.env.TOKEN_SECRET as string,
                {
                    expiresIn: '24h' 
                }
            );
            res.status(200).json({
                userId: userLogin._id,
                token: token
            });
        }
    }
}
