"use client"
import { FaArrowUpRightDots } from 'react-icons/fa6';
import gsap, { SplitText } from "gsap/all";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const FellingBolder = () => {
  const triggerRef = useRef(null);
    useGSAP(() => {
    const split = new SplitText(".title-text-left", {
      type: "chars",
    });

    gsap.set(split.chars, { y: 200, opacity: 0 });

    gsap.to(split.chars, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: triggerRef.current,
        top: "80%",
        toggleActions: "play reverse play reverse"
      }
    });
    const split2 = new SplitText(".title-text-right", {
      type: "chars",
    });

    gsap.set(split2.chars, { y: 200, opacity: 0 });

    gsap.to(split2.chars, {
      y: 0,
      opacity: 1,
      duration: 1.6,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: triggerRef.current,
        top: "80%",
        toggleActions: "play reverse play reverse"
      }
    });
  });
  return (
    <section ref={triggerRef} className="relative w-full min-h-screen bg-[#F9F9F7] py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Grid Pattern (Subtle Lines) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', size: '40px 40px', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Top Section: FEELING + Top Right Image */}
        <div className="flex justify-between items-start mb-[-40px] md:mb-[-80px]">
          <h2 className="title-text-left text-[12vw] md:text-[14vw] font-black text-[#E94E1B] leading-none tracking-tighter uppercase italic ">
            FEELING
          </h2>
          
          <div className="hidden md:flex flex-col items-start gap-3 mt-10 group">
            <div className="w-48 h-32 rounded-[30px] overflow-hidden shadow-lg">
              <img src="/feelingBoy.JPG" alt="Contemporary Style" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
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
              <img src="/fellingGirl.JPG" alt="Jacket Black" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <h2 className="title-text-right text-[12vw] md:text-[14vw] mb-20  scale-y-120 font-black text-[#E94E1B] leading-none tracking-tighter uppercase italic ml-auto">
            BOLDER
          </h2>
        </div>

      </div>
    </section>
  );
};

export default FellingBolder;