
"use client";
import PaymentSuccessMessage from "@/components/PaymentSuccessMessage";


import React, { Suspense } from 'react'

const page = () => {
  
  // console.log("session id", session_id , "and ",searchParams)
  return (
    <div>
      {/* paymen success */}
      <Suspense fallback={<div>Loading...</div>}>
        <PaymentSuccessMessage />
     </Suspense>
    </div>
  )
}

export default page