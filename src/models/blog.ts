import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Name required"],
        unique: true,
    },
    image: {
        type: String,
    },
    summary: {
        type: String,
        maxlength: [255, "Must be less than 255 characters"],
    },
    content: {
        type: String,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
})

export default mongoose.model("Blog", blogSchema)