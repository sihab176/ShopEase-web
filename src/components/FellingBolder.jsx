import { FaArrowUpRightDots, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const FellingBolder = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F9F7] py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Grid Pattern (Subtle Lines) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', size: '40px 40px', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Top Section: FEELING + Top Right Image */}
        <div className="flex justify-between items-start mb-[-40px] md:mb-[-80px]">
          <h2 className="text-[12vw] md:text-[14vw] font-black text-[#E94E1B] leading-none tracking-tighter uppercase italic ">
            FEELING
          </h2>
          
          <div className="hidden md:flex flex-col items-start gap-3 mt-10">
            <div className="w-48 h-32 rounded-[30px] overflow-hidden shadow-lg">
              <img src="/feelingBoy.JPG" alt="Contemporary Style" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              <p>Very Youthful</p>
              <p className="opacity-60">Contemporary Style</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Jacket Card + BOLDER */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          
          {/* Jacket Black Floating Card */}
          <div className="relative group w-full max-w-[320px] mb-10 md:mb-0 mt-16">
            <div className="rounded-[40px] overflow-hidden h-[400px] shadow-xl">
              <img src="/fellingGirl.JPG" alt="Jacket Black" className="w-full h-full object-cover" />
            </div>
            {/* Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#D7EBE5] p-6 rounded-[30px] shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-black uppercase text-gray-800">Jacket Black</h3>
                <div className="bg-[#E94E1B] p-2 rounded-full text-white">
                  <FaArrowUpRightDots size={20} />
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-600 font-medium">
                Empowering you to take bold steps forward with confidence and clarity
              </p>
            </div>
          </div>

          {/* BOLDER BIG TEXT */}
          <h2 className="text-[12vw] md:text-[14vw] mb-20  scale-y-120 font-black text-[#E94E1B] leading-none tracking-tighter uppercase italic ml-auto">
            BOLDER
          </h2>
        </div>

        {/* Bottom Section: Center Image + Description */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 md:mt-0 md:ml-40">
          <div className="w-40 h-40 rounded-[30px] overflow-hidden shadow-md">
             <img src="/bottom-model.jpg" alt="Bold Style" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-[200px] flex items-start gap-2">
            <p className="text-[12px] font-bold text-gray-600 leading-snug uppercase tracking-tight">
              Empowering you to take bold steps forward <span className="text-gray-400">with confidence and clarity</span>
            </p>
            <FaArrowUpRightDots size={18} className="text-gray-400 shrink-0" />
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default FellingBolder;