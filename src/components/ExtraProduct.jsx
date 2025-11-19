"use client"
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ExtraProduct = () => {
  const allProduct = [
    {
      imageName: "/handFan-removebg-preview.png",
      text: "Hand Fan",
    },
    {
      imageName: "/face-wash-removebg-preview.png",
      text: "Face Wash",
    },
    {
      imageName: "/lamp-removebg-preview.png",
      text: "Lamp",
    },
    {
      imageName: "/sofa-removebg-preview.png",
      text: "Furniture",
    },
    {
      imageName: "/sunGlass-removebg-preview.png",
      text: "Sun Glass",
    },
    {
      imageName: "/washing_machine-removebg-preview.png",
      text: "Washing Machine",
    },
    {
      imageName: "/blutooth-removebg-preview.png",
      text: "Bluetooth",
    },
  ];
  return (
    <div className="my-20">
<div className="relative">
  {/* Soft Fade Left */}
  {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div> */}

  {/* Soft Fade Right */}
  {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div> */}

  <Marquee speed={40} pauseOnHover={true} gradient={false}>
    <section className="flex gap-10">
      {allProduct.map((product) => (
        <div key={product.id} className="text-center">
          <div className="bg-gray-300 border border-blue-400 rounded-full w-36 h-36 flex justify-center items-center p-4 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <Image
              src={product.imageName}
              alt="product image"
              width={200}
              height={200}
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-5"
            />
          </div>

          <a className="block mt-2 cursor-pointer hover:border-b border-orange-500 hover:font-semibold transition-all duration-300">
            {product.text}
          </a>
        </div>
      ))}
    </section>
  </Marquee>
</div>

    </div>
  );
};

export default ExtraProduct;
