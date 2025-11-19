import dbConnect from "../../../../lib/mongbd";
import reviewModel from "../../../../models/review";



export async function GET() {
    dbConnect()
    try {
        const result= await reviewModel.find().sort({createAt:-1})
        return new Response(JSON.stringify(result), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}


export  async function POST (req){
    dbConnect()
    try {
        const data= await req.json()
        const result= await reviewModel.create(data)
        return new Response(JSON.stringify(result), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}