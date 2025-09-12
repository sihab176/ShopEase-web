"use server"
import dbConnect from "../../../../lib/mongbd"
import userModel from "../../../../models/UserModel"

import bcrypt from "bcryptjs";

export const registerUser= async({name , email , password})=>{


    await dbConnect()
    try {
        const existingUser= await userModel.findOne({email})
      if (existingUser) {
        return { status: 400, error: "User already exists" };
    }

    const hashedPassword= await bcrypt.hash(password , 10)
    const newUser= new userModel({
        name,
        email,
        password : hashedPassword
    })
    await newUser.save()
    return { success: true, message: "User registered successfully" };
    } catch (error) {
        return { status: 500, error: error.message };
    }
}