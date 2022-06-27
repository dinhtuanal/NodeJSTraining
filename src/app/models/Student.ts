import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name required"],
        maxlength: [255, "Must be less than 255 characters !"],
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String ,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});
export default model('Student',studentSchema)