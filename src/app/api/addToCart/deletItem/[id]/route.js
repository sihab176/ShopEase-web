import { NextResponse } from "next/server";
import dbConnect from "../../../../../../lib/mongbd";
import addCartModel from "../../../../../../models/addCartModel";


export async function DELETE(req,{params}) {
  await dbConnect()

  console.log("params======================>", params);
  try {
    const {id}=await params
    const products =await addCartModel.deleteOne({ _id: id })
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}