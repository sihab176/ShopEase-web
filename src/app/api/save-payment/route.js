import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongbd";
import Payment from "../../../../models/Payment";
import Stripe from "stripe";


const stripe= new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const {session_id}= await req.json();
        await dbConnect()
        // Stripe থেকে session details নিয়ে আসা
        const session =await stripe.checkout.sessions.retrieve(session_id) 
        // data a save  
        const newPayment= await Payment.create({
            email: session.customer_details?.email,
            name: session.customer_details?.name,
            amount_total: session.amount_total /100,
            currency : session.currency,
            payment_status: session.payment_status,
            transaction_id : session.id,
            createdAt: new Date(),
        });
        // console.log(" this the payment", newPayment);
        return NextResponse.json({success: true , payment : newPayment})

    } catch (error) {
        console.log("payment save error", error);
        return NextResponse.json({error: message}, {status: 500})
    }
}

export async function GET() {
    dbConnect()
    try {
        const products =await Payment.find({}).sort({createdAt:-1})
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}