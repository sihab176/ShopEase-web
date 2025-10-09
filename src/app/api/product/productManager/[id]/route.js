import { NextResponse } from "next/server";
import dbConnect from "../../../../../../lib/mongbd";
import Product from "../../../../../../models/Products";

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const products =await Product.deleteOne({ _id: id })
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

export async function PUT(req,{params}) {
  await dbConnect();
  try {
    const {id}=await params ;
    const body= await req.json()
    const updatedProduct= await Product.findByIdAndUpdate(id,body, {new:true})
    return NextResponse.json(updatedProduct, { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}
