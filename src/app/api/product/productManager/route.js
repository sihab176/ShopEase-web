import dbConnect from "../../../../../lib/mongbd";
import Product from "../../../../../models/Products";


export async function GET() {
  await dbConnect()
  try {
    const products =await Product.find({}).sort({createdAt:-1})
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

