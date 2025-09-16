import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const OrderSummary = ({ grandTotal }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {};

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createOrder = async () => {};

  useEffect(() => {
    fetchUserAddresses();
  }, []);

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
          <input type="text"  className="border w-full h-10 px-3" placeholder="address"/>
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
                background: "none"
                
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
            <p>Total</p>${grandTotal - grandTotal * 0.02}
          </div>
        </div>
      </div>

      <button
        onClick={createOrder}
        className="w-full bg-orange-600 text-white py-3 mt-5 hover:bg-orange-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
