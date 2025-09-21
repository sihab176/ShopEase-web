import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm tracking-wide uppercase bg-gray-800 px-3 py-1 rounded-full">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
              Innovation for business growth with{" "}
              <span className="text-orange-500">ShopEase</span>
            </h2>
            <p className="text-gray-400 mt-4">
              We understand that every business is unique. That’s why we offer
              customized solutions to meet your specific needs.
            </p>

            <h3 className="text-5xl md:text-6xl font-bold text-orange-500 mt-8">
              21+
            </h3>
            <p className="text-lg font-medium">Years in Business</p>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-gray-800 p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-gray-700 transition">
              <div>
                <h4 className="text-lg font-semibold">
                  🏆 Excellence in Marketing
                </h4>
                <p className="text-sm text-gray-400">Recognized globally</p>
              </div>
              <button className="text-orange-500 font-bold text-xl">
                &rarr;
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-gray-700 transition">
              <div>
                <h4 className="text-lg font-semibold">
                  🚀 Top SEO Performance Award
                </h4>
                <p className="text-sm text-gray-400">Best ranking strategies</p>
              </div>
              <button className="text-orange-500 font-bold text-xl">
                &rarr;
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 p-5 rounded-xl flex justify-between items-center shadow-lg hover:bg-gray-700 transition">
              <div>
                <h4 className="text-lg font-semibold">
                  💡 Best Digital Strategy Award
                </h4>
                <p className="text-sm text-gray-400">Proven business growth</p>
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
