import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:String,
    email:String,
    contact:Number,
    refName:String,
    refEmail:String,
    refContact:Number,
    relation:String
})
export const User=mongoose.model('User',userSchema);