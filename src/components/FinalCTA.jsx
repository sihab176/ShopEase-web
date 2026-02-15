import { FaShoppingBag } from "react-icons/fa";

const FinalCTA = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Container for content and floating images */}
      <div className="relative max-w-5xl w-full text-center">
        {/* Left Floating Image */}
        <div className="hidden lg:block absolute left-[-150px] bottom-[-20px] w-48 h-56 rounded-[30px] overflow-hidden shadow-2xl rotate-[-5deg] z-10">
          <img
            src="/fatleft.JPG"
            alt="Couple in hoodies"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Floating Image */}
        <div className="hidden lg:block absolute right-[-150px] top-[-20px] w-48 h-56 rounded-[30px] overflow-hidden shadow-2xl rotate-[5deg] z-10">
          <img
            src="/fatright.JPG"
            alt="Fashion models"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Text Content */}
        <div className="relative z-20 space-y-6">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none uppercase">
            Ready to upgrade <br /> your hoodie game?
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Enjoy premium comfort and modern fits made to elevate your everyday
            style. Pick your favorite from our latest collection.
          </p>

          {/* Buttons Row */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <button className="bg-[#E94E1B] hover:bg-[#c94013] text-white px-10 py-4 rounded-full text-sm font-bold transition-all duration-300 shadow-lg">
              Let's Shop Now
            </button>

            <button className="bg-[#E94E1B] hover:bg-[#c94013] text-white p-4 rounded-full transition-all duration-300 shadow-lg">
              <FaShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Gradient (Optional for depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>
    </section>
  );
};

export default FinalCTA;
