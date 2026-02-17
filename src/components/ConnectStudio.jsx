import React from 'react';

const ConnectStudio = () => {
  const images = [
    { id: '01', src: '/groupimage.jpg', height: 'h-48 md:h-64' },
    { id: '02', src: '/ab-pic-5.avif', height: 'h-64 md:h-80' },
    { id: '03', src: '/ab-pic-1.avif', height: 'h-80 md:h-[450px]' }, // Center large image
    { id: '04', src: '/ab-pic-3.avif', height: 'h-64 md:h-80' },
    { id: '05', src: '/groupimage.jpg', height: 'h-48 md:h-64' },
  ];

  return (
    <section className="relative w-full bg-[#F9F9F7] pb-20 pt-20  px-4 overflow-hidden">
      
      {/* Background Large Faded Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2 className="text-[16vw] font-black text-gray-200 opacity-40 uppercase tracking-tighter">
          THE STUDIO
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-[8vw] font-black uppercase  leading-none text-gray-900" 
              style={{ fontFamily: 'Impact' }}>
            Connect With <br /> Our Studio
          </h2>
        </div>

        {/* Stepped Image Gallery */}
        <div className="flex items-end justify-center gap-2 md:gap-4">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image Numbering */}
              <span className="text-[10px] font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.id}
              </span>
              
              {/* Image Container */}
              <div className={`relative ${item.height} w-24 md:w-56 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-md`}>
                <img 
                  src={item.src} 
                  alt={`Studio look ${item.id}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectStudio;