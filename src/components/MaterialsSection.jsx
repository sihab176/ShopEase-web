import React from 'react';

const MaterialsSection = () => {
  return (
    <section className="bg-[#F9F9F7] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Images Column */}
        <div className="md:col-span-6 relative">
          {/* Top Small Image (Sunglasses) */}
          <div className="w-2/3 ml-auto mb-[-100px] relative z-0">
            <img 
              src="/aboutgroupimage.JPG" 
              alt="Premium Sunglasses" 
              className="w-full h-auto grayscale object-cover rounded-sm shadow-xl"
            />
          </div>

          {/* Main Large Portrait Image (Model) */}
          <div className="w-4/5 relative z-10 border-[15px] border-white shadow-2xl">
            <img 
              src="/groupimage.jpg" 
              alt="Heritage Style Model" 
              className="w-full h-auto grayscale object-cover"
            />
          </div>

          {/* Decorative Black Block */}
          <div className="absolute bottom-[-40px] left-[-20px] w-32 h-40 bg-[#E94E1B] z-0 hidden md:block"></div>
        </div>

        {/* Right Side: Content Column */}
        <div className="md:col-span-6 flex flex-col gap-16 md:pl-10">
          
          {/* Section 1: Premium Materials */}
          <div className="space-y-4">
            <h2 className="scale-y-130  text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none" 
                >
              Premium Materials
            </h2>
            <p className="text-sm text-gray-600 max-w-sm font-medium leading-relaxed">
              Titanium, acetate, and gold — responsibly sourced and meticulously selected for enduring quality.
            </p>
          </div>

          {/* Section 2: Heritage Style */}
          <div className="space-y-4 relative">
            <h2 className=" scale-y-130 text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none"
                >
              Heritage Style
            </h2>
            <p className="text-sm text-gray-600 max-w-sm font-medium leading-relaxed">
              Classic meets modern aesthetics in designs that honor tradition while defining contemporary elegance.
            </p>
            {/* Star Icon */}
            <div className="text-4xl mt-4">✱</div>
          </div>

          {/* Section 3: Timeless Design (Black Background Box) */}
          <div className="bg-[#E94E1B]/70 text-white p-10 md:p-14 mt-4 relative">
            <h2 className=" scale-y-130 text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6"
                >
              Timeless <br /> Design
            </h2>
            <p className="text-xs md:text-sm opacity-80 max-w-xs font-light leading-relaxed">
              Created to be collected, not discarded. Our pieces transcend seasonal trends to become lasting signatures.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MaterialsSection;