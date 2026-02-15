import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#10051d] text-gray-300 pt-32 pb-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-orange-700">Shop</span>Ease
          </h2>
          <p className="text-sm leading-6">
            Your trusted destination for quality products at the best prices.
            Shop smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-white">
                All Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@shopmate.com</li>
            <li>Phone: +880 1700 000000</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Payment Methods
          </h3>
          <div className="flex flex-wrap gap-3">
            <img
              src="/visa-removebg-preview.png"
              alt="Visa"
              className="h-8 bg-white rounded p-1"
            />
            <img
              src="/masterCard-removebg-preview.png"
              alt="MasterCard"
              className="h-8 bg-white rounded p-1"
            />
            <img
              src="/paypal-removebg-preview.png"
              alt="PayPal"
              className="h-8 bg-white rounded p-1"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t-2 border-gray-400 pt-6">
        {/* © {new Date().getFullYear()} ShopMate — All Rights Reserved. */}
      </div>
      <div>
        <h1 className="text-[12vw] md:text-[14vw]   scale-y-120 font-black text-gray-200 leading-none tracking-tighter uppercase italic ">
          essentialized
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
