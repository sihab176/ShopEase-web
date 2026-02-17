"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap/all";

const ClassicNeutrals = () => {
  const ref= useRef(null)
  useGSAP(() => {
    gsap.from(".left-cart-top", {
      opacity: 0,
      x: 90,
      duration: 1.3,
      delay: 0.5,
      ease: "power3.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 60%",
      },
    });
    gsap.from(".left-cart-bottom", {
      opacity: 0,
      y: 90,
      duration: 1.9,
      delay: 0.6,
      ease: "power3.out",
      stagger: 0.6,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 60%",
      },
    });
    gsap.from(".middle-card", {
      opacity: 0,
      y: 120,
      duration: 1.9,
      delay: 0.6,
      ease: "power3.out",
      stagger: 0.6,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 60%",
      },
    });
  });

  return (
    <div ref={ref} className="bg-black p-4 md:p-8 min-h-screen flex items-center justify-center ">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl w-full">
        {/* Left Column (Stack of two cards) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {/* Top Orange Card */}
          <div className="left-cart-top bg-[#2C2C2C] rounded-[40px] p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-1/2">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter italic">
                Classic <br />
                Neutrals
              </h1>
            </div>
            <div className="mt-4">
              <p className="text-white text-[10px] leading-tight mb-4 uppercase font-bold opacity-90">
                Your desired <br /> product for your <br /> essential style
              </p>
              <button className="bg-black text-white text-[10px] px-6 py-2 rounded-full uppercase font-bold tracking-widest hover:scale-105 transition-transform">
                Watch Our Intro
              </button>
            </div>
          </div>

          {/* Bottom Image Card */}
          <div className="left-cart-bottom group bg-[#D1D5DB] rounded-[40px] overflow-hidden aspect-square md:aspect-auto md:h-1/2">
            <img
              src="/littleboyModel.JPG"
              alt="Couple in hoodies"
              className="w-full h-full object-cover  object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Middle Main Image Card */}
        <div className="middle-card md:col-span-6 group bg-[#D1D5DB] flex justify-center items-center rounded-[40px] relative overflow-hidden h-[500px] md:h-auto">
          {/* Background Text */}
          <div className="absolute top-20 left-0 w-full opacity-20 pointer-events-none -rotate-12 z-0">
            <span className="text-8xl font-black text-white whitespace-nowrap uppercase">
              NEUTRALS NEUTRALS
            </span>
          </div>

          {/* Image (Above Text) */}
          <img
            src="/model.png"
            alt="Main Model"
            className="relative z-10 w-[500px] h-[600px] object-cover object-top  transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Right Column (Categories) */}
        <div className="md:col-span-3 flex flex-col justify-start p-4">
          <h2 className="text-white text-2xl font-bold uppercase mb-6 leading-tight">
            Explore Our <br /> Categories
          </h2>

          {/* Animated Bar Graphic */}
          <div className="flex gap-1 mb-8">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-12 bg-gradient-to-t from-orange-500 to-transparent opacity-50"
              />
            ))}
          </div>

          {/* Category List */}
          <div className="flex flex-col gap-2">
            {[
              "All Collection",
              "Summer Collection",
              "Best Seller",
              "Winter Collection",
              "New Arrivals",
              "Collaboration",
            ].map((category, index) => (
              <button
                key={index}
                className="group flex items-center justify-between border border-white/30 text-white rounded-full px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <h1 className="bg-[#2e0320]"></h1>
    </div>
  );
};

export default ClassicNeutrals;
