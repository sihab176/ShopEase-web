
import dbConnect from "../../../../lib/mongbd";
import Product from "../../../../models/Products";

export async function GET() {
  await dbConnect()
  try {
    const products =await Product.find({}).sort({createdAt:-1}).limit(10)
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}

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

