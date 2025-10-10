import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckoutButton from "./Payment/CheckoutButton";

const OrderSummary = ({ grandTotal ,products}) => {
  const [phoneNumber, setPhoneNumber] = useState();

  const [isOpen, setIsOpen] = useState(false);



  

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">
      <h2 className="text-xl md:text-2xl font-medium text-gray-700">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            write Address
          </label>
          <input
            type="text"
            className="border w-full h-10 px-3"
            placeholder="address"
          />
        </div>

        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Phone Number
          </label>
          <div className="flex flex-col items-start gap-3">
            <PhoneInput
              country={"bd"}
              placeholder="phone"
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputStyle={{
                height: "40px",
                width: "100%",

                borderRadius: "0px",
                border: "none",
                background: "none",
              }}
              className="border focus:ring-1 focus:border-amber-600"
            />
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-medium text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (2%)</p>${grandTotal * 0.02}
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p> ${ (Number(grandTotal) + (Number(grandTotal) * 0.02)).toFixed(2) }
          </div>
        </div>
      </div>

      <div
        
        className=""
      >
        <CheckoutButton order={products} tax={grandTotal}/>
      </div>
      {/* Modal (inside same file) */}
     
    </div>
  );
};

export default OrderSummary;
