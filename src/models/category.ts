import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name required"],
        minlength: [4, "Must be more than 4 charaters"],
    },
    desc: {
        type: String,
    }
})

export default mongoose.model("category", categorySchema)
