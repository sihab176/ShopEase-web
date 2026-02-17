import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckoutButton from "./Payment/CheckoutButton";

const OrderSummary = ({ grandTotal, products }) => {
  const [phoneNumber, setPhoneNumber] = useState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">
      <h2 className="text-xl md:text-2xl font-medium text-gray-700">
        Order Summary
      </h2>

      <div className="space-y-6">


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
            <p>Total</p> $
            {(Number(grandTotal) + Number(grandTotal) * 0.02).toFixed(2)}
          </div>
        </div>
      </div>

      <div className="">
        <CheckoutButton order={products} tax={grandTotal} />
      </div>

    </div>
  );
};

export default OrderSummary;
