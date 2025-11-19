import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongbd";
import addCartModel from "../../../../models/addCartModel";

export async function DELETE(req) {
    await dbConnect()
    const {searchParams}=new URL(req.url)
    const email= searchParams.get("email")
 
    console.log("deleted email------>",email);
    try {
        await addCartModel.deleteMany({user_email: email});
        return NextResponse.json({success: true, message: "cart is clear"})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message},{status:500})
    }
}