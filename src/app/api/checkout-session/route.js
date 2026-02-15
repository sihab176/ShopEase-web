import { NextResponse } from "next/server";

const { default: Stripe } = require("stripe");

const stripe= new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {

    try {
        const items= await req.json();
        // console.log("item ========>",items);

        const line_items= items.order.map(item=>({
            price_data:{
                currency : "eur",
                product_data: {name: item.product_name},
                unit_amount: Math.round(item.product_price * 100)
            },
            quantity : item.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url:`${process.env.NEXTAUTH_URL}/`, //! change 
            cancel_url: `${process.env.NEXTAUTH_URL}/checkout`
        });
        return NextResponse.json({url: session.url})
    } catch (error) {
        console.log("error from the checkout route",error);
        return NextResponse.json({error : error.message},{status: 500})
    }
    
}

// `${process.env.NEXTAUTH_URL}/payment_success?session_id={CHECKOUT_SESSION_ID}`