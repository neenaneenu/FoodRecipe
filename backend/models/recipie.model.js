import mongoose, { Schema , model} from "mongoose"


 const RecipieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    ingredients:{
        type: Array,
        required: true
    },
    instructions:{
        type: String,
        required: true
    },
    time:{
        type: String,
    },
    coverImage:{
        type: String,
    }

}, {timestamps:true})

export const recipieController = model("Recipie", RecipieSchema)
