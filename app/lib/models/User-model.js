import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    profilePicture:{
        type:String,
        required:true,
       
    }
    ,
    isAdmin:{
        type:Boolean,
        default:false
    }
   }, {Timestamp:true}
)

const User = mongoose.model.User || mongoose.model("User", userSchema)

export default User