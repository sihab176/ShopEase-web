import React from "react";

import { FaShippingFast, FaCreditCard, FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="bg-gray-100  py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm tracking-wide uppercase bg-[#f7e1d7] text-white px-3 py-1 rounded-full">
              Why Shop With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 ">
              Trusted by{" "}
              <span className="text-orange-500">thousands of customers</span>{" "}
              every month
            </h2>
            <p className="text-gray-400 mt-4">
              We deliver the latest products at the best prices with fast
              delivery and secure payments. Customer satisfaction is our top
              priority.
            </p>

            <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mt-8">
              50K+
            </h3>
            <p className="text-lg font-medium">Happy Customers</p>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-[#f7e1d7] p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-[#f7e9c8] transition">
              <div className="flex items-center gap-4">
                <FaShippingFast className="text-orange-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Fast & Reliable Delivery
                  </h4>
                  <p className="text-sm text-gray-400">
                    Get your orders on time
                  </p>
                </div>
              </div>
              <button className="text-orange-500 font-bold text-xl">
                &rarr;
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f7e1d7] p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-[#faedcd] transition">
              <div className="flex items-center gap-4">
                <FaCreditCard className="text-orange-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Secure Payment Options
                  </h4>
                  <p className="text-sm text-gray-400">
                    Safe & hassle-free checkout
                  </p>
                </div>
              </div>
              <button className="text-orange-500 font-bold text-xl">
                &rarr;
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f7e1d7] p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-[#faedcd] transition">
              <div className="flex items-center gap-4">
                <FaStar className="text-orange-500 text-2xl" />
                <div>
                  <h4 className="text-lg font-semibold">
                    Premium Quality Products
                  </h4>
                  <p className="text-sm text-gray-400">Only the best for you</p>
                </div>
              </div>
              <button className="text-orange-500 font-bold text-xl">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
