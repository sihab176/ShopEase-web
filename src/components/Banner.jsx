import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const Banner = () => {
  const bannerInfo = [
    {
      id: 1,

      img: "/bose_headphone_image.png",
    },

    {
      id: 3,

      img: "/headPhone-removebg-preview.png",
    },
    {
      id: 2,

      img: "/show-removebg-preview.png",
    },
  ];
  return (
    <>
      <section className={`bg-gradient-to-r from-orange-500 to-amber-500 `}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          {bannerInfo.map((item) => (
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 px-5">
                {/* LEFT - promo text */}
                <div className="flex flex-col items-start space-y-4 relative">
                  <div className="absolute top-[-90px]  flex items-center">
                    <TiShoppingCart className="text-5xl" />
                    <span className="text-2xl text-white">ONLINE SHOPE</span>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    For Online Order
                  </span>

                  <h2 className="text-4xl md:text-5xl font-extrabold leading-none">
                    30% <span className="text-black/90">OFF</span>
                  </h2>

                  <p className="text-sm text-gray-800 max-w-[18rem] text-start">
                    Limited time — grab the latest styles while stock lasts.
                  </p>

                  <a
                    href="#"
                    className="mt-3 inline-block bg-black text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-95 transition"
                  >
                    Shop Now
                  </a>
                </div>

                {/* CENTER - image with circular backdrop + pedestal */}
                <div className="flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-end justify-center">
                    {/* circular backdrop */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/85 shadow-2xl"></div>
                    </div>

                    {/* pedestal / show-stand */}
                    <div className="absolute bottom-6 w-52 md:w-64 h-6 md:h-8 bg-white rounded-full shadow-lg" />

                    {/* product image (slightly raised) */}
                    <div className="relative z-10 -translate-y-6 md:-translate-y-8">
                      {/* Put your image in public/images/product.png */}
                      <Image
                        src={item?.img}
                        alt="Product"
                        width={300}
                        height={300}
                        className="object-contain -rotate-2 mb-6"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT - big headline + CTA */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-4 relative">
                  <div className="absolute top-[-50px] flex space-x-4 mt-4 text-xl text-black">
                    <FaFacebook className="cursor-pointer hover:text-gray-700" />
                    <FaTwitter className="cursor-pointer hover:text-gray-700" />
                    <FaInstagram className="cursor-pointer hover:text-gray-700" />
                    <FaWhatsapp className="cursor-pointer hover:text-gray-700" />
                  </div>
                  <p className="text-3xl text-gray-500 uppercase tracking-wide ">
                    New Arrivals
                  </p>

                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    JUST FOR <span className="italic text-black/90">you</span>
                  </h1>

                  <p className="max-w-[16rem] text-gray-800">
                    Fresh drops — curated styles for you. Free shipping on
                    orders over $50.
                  </p>

                  <a
                    href="#"
                    className="mt-3 inline-block bg-black text-white px-3 py-1  font-medium shadow hover:opacity-95 transition"
                  >
                    www.yoursite.com
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
