import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongbd";
import userModel from "../../../../models/UserModel";

export async function GET(req) {
    
    await dbConnect()

    try {
        const users= await userModel.find().select("-password").sort({createdAt:-1});
         return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.log("error to get the user", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}