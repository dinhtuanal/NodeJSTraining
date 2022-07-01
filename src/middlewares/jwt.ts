import { NextFunction, Request, Response } from 'express'
import jwt, { VerifyCallback } from 'jsonwebtoken'
const TOKEN_SECRET = process.env.TOKEN_SECRET as string

export const getToken = async (req:Request, res:Response, next:NextFunction)=>{
    try{
        const token = ((res as any).req.headers.authorization as string).slice(7)
        const decoded = jwt.verify(token, TOKEN_SECRET as string)
        // console.log((decoded as any))
        jwt.verify(token, TOKEN_SECRET as string, (err: any)=>{
            if(err){
                res.status(400).end({
                    message: "Not found"
                })
            }else{
                next()
            }
        })
    }catch(err:any){
        console.log("Error: " , err)
        next(err)
    }
}
