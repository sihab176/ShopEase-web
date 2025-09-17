import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongbd";
import addCartModel from "../../../../../models/addCartModel";

export async function GET(req,{params}) {
  await dbConnect()
  try {
    const {user_email}=await params
    const products =await addCartModel.find({user_email}).sort({createdAt:-1})
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
