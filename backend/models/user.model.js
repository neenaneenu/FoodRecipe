import mongoose, { Schema , model} from "mongoose"


 const UserSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    

}, {timestamps:true})

export const UserController = model("user", UserSchema)