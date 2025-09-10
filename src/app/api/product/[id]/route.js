import dbConnect from "../../../../../lib/mongbd";
import Product from "../../../../../models/Products";

export async function GET(req,{params}) {
    await dbConnect()
    try {
        const {id}=await params;
        // console.log("id",id);
        const singleProduct= await Product.findById(id)
        if(!singleProduct){
          return new Response(
           JSON.stringify({ error: "Product not found" }),{ status: 404 }
      );
        }
        
    return new Response(JSON.stringify(singleProduct), { status: 200 });
    } catch (error) {
        
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}