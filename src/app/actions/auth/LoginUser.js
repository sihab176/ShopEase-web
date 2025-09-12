
import bcrypt from "bcryptjs";
import userModel from "../../../../models/UserModel";
import dbConnect from "../../../../lib/mongbd";

export const LoginUser=async(payload)=>{
    await dbConnect()
    const {email, password}=payload
   
    const user= await userModel.findOne({email})

    const isPasswordOk =await bcrypt.compare(password , user.password)
    if(!isPasswordOk) return null
    if(!user) return null
    return user
}