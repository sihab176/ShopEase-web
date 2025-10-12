"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const PaymentSuccessPage = () => {
    const searchParams= useSearchParams()
    const session_id= searchParams.get("session_id")
    useEffect(()=>{
        if(session_id){
            const postData=async()=>{
              const res= await fetch("/api/save-payment",{
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify({session_id})
              });
              const data= await res.json()
              console.log("this is the session id data", data);
            }
            postData()
        }

    },[session_id])
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-semibold text-green-600 mb-2">
        ✅ Payment Successful!
      </h2>
      <p>Thank you for your payment.</p>
    </div>
  );
};

export default PaymentSuccessPage;
