import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        maxlength: [255, "Must be less than 255 characters !"],
    },
    lastName: {
        type: String,
        maxlength: [255, "Must be less than 255 characters !"],
    },
    username: {
        type: String,
        maxlength: [255, "Must be less than 255 characters !"],
        required: [true, "Username required"],
        unique: true,
    },
    password: {
        type: String,
        maxlength: [255, "Must be less than 255 charaters !"],
        minlength: [6, "Must be more than 6 charaters !"],
        required: [true, "Password required"]
    },
    email: {
        type: String, 
        lowercase: true,
        maxlength: [255, "Must be less than 255 characters !"],
        required: [true, "Email required"],
        unique: true,
    },
})

export default mongoose.model("User", userSchema)
