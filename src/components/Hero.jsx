
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F1E9] flex flex-col items-center overflow-hidden pt-10">
      
      {/* Top Navigation / Slogan Row */}
      <div className="w-full max-w-7xl flex justify-between px-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-800 uppercase z-10">
        <span>Move Comfortably</span>
        <span>Live Freely</span>
        <span>Feel Confident</span>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full flex-grow flex items-center justify-center mt-[-20px]">
        
        {/* Background Big Text */}
        <h1 className="absolute text-[13vw] top-20 leading-none font-black text-black tracking-tighter scale-y-195 z-0  ">
          PURE COMFORT
        </h1>

        {/* Floating Description Text (Left Side) */}
        <div className="absolute left-10  bottom-1/4 max-w-[200px] z-20">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-medium">
            Designed for everyday movement. Soft fabrics, relaxed fits, and effortless comfort.
          </p>
        </div>

        {/* Star Shape Overlay (Light Pinkish) */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
             <span className="text-[200px]">✱</span>
        </div>

        {/* Model Image */}
        <div className="relative z-10 mt-20 md:mt-0">
          <img 
            src="/hero.png" 
            alt="Model" 
            className="h-[70vh] md:h-[90vh] object-contain"
          />
        </div>

        {/* Floating Product Card */}
        <div className="absolute z-0 right-10 md:block hidden md:right-[15%] top-1/2 -translate-y-1/2 transform rotate-[-5deg]">
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl shadow-2xl border border-white/20 w-48 md:w-56 overflow-hidden">
            <div className="relative bg-[#222] rounded-lg overflow-hidden p-2">
              <div className="flex justify-between items-center text-[8px] text-white/70 mb-2 uppercase tracking-widest">
                <span>Autumn Hoodie</span>
                <span>...</span>
              </div>
              <img src="/cort.png" alt="Hoodie" className="w-full h-40 object-cover rounded-md" />
              <div className="flex justify-between mt-3 text-white">
                <span className="text-[10px] font-bold">FABRIC</span>
                <span className="text-[10px] font-bold">$71.32</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className=" absolute bottom-3 z-30 flex gap-4 mb-20">
        <button className="px-8 py-3 bg-[#E94E1B] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-orange-700 transition">
          Shop the Collection
        </button>
        <button className="px-8 py-3 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition backdrop-blur-sm">
          Explore New Arrivals
        </button>
      </div>

    </section>
  );
};

export default Hero;