"use client"
import React, { useState } from 'react';

const CheckoutButton = ({order ,tax}) => {
    const [loading , setLoading]=useState(false)

    const handleCheckout= async()=>{
        setLoading(true)
        const res= await fetch("/api/checkout-session",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body:   JSON.stringify({order})
        });

        const data= await res.json()
        if(data.url){
            window.location.href= data.url
        }else{
            alert("Checkout session তৈরি হয়নি!")
            setLoading(false)
        }
    }

    const total= order.reduce((sum, i)=> sum + i.product_price * (i.quantity || 1),0)
    const totalPay= total + (tax * 0.02)

    return (
        <div>
            <button
            onClick={handleCheckout}
            disabled={loading}
            className='w-full bg-orange-600 text-white py-3 mt-5 hover:bg-orange-700'>
                {loading ? "loading..." : `pay ${totalPay}`}
            </button>
        </div>
    );
};

export default CheckoutButton;