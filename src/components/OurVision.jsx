import React from "react";

const OurVision = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Text Masking Area */}
        <div className="relative w-full overflow-hidden flex justify-center items-center">
          {/* 'bg-clip-text' ব্যবহার করে টেক্সটকে মাস্ক করা হয়েছে। 
            '/vision-bg.jpg' এর জায়গায় আপনার পছন্দের ছবি বা ভিডিও ফ্রেম দিন।
          */}
          <h1
            className="text-[17vw]  font-black leading-none tracking-tighter text-transparent bg-cover bg-center uppercase select-none"
            style={{
              backgroundImage: 'url("/groupimage.jpg")', // আপনার ইমেজের পাথ দিন
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
                backgroundAttachment: "fixed",
                filter: "grayscale(80%)",
                // webkitFilter: "grayscale(80%)"
            }}
          >
            Our Vision
          </h1>

          {/* Center Floating Inset Image (ঐচ্ছিক: ছবির মতো মাঝখানে ছোট একটি ফ্রেম দিতে চাইলে) */}
          <div className=" w-[32vw] h-[32vw]  border border-white/20 overflow-hidden hidden md:block z-10">
            <img
              src="/groupimage.jpg"
              alt="Vision Detail"
              className="w-full h-full object-cover grayscale-25"
            />
          </div>
        </div>

        {/* Footer Subtitles Row */}
        <div className="w-full mt-4 flex justify-between items-center text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-black">
          <div className="flex-1 text-left">Clean-Cut Tailoring</div>
          <div className="flex-1 text-center">Mixes Subtly Formal</div>
          <div className="flex-1 text-right">And Casual Influences</div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
