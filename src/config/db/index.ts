import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose
        .connect('mongodb://localhost:27017/test')
        .then(()=>{
            console.log('Connect database success')
        })
        .catch((err)=>{
            console.log('Connect fail: '+err)
        })
}