
import dbConnect from "../../../../lib/mongbd";
import Product from "../../../../models/Products";


export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const product = await Product.create(body);
    // console.log("product,",product);
    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}