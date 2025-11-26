"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ExtraProduct = () => {
  const allProduct = [
    {
      imageName: "/handFan-removebg-preview.png",
      text: "Hand Fan",
      id: 1,
    },
    {
      imageName: "/face-wash-removebg-preview.png",
      text: "Face Wash",
      id: 2,
    },
    {
      imageName: "/lamp-removebg-preview.png",
      text: "Lamp",
      id: 3,
    },
    {
      imageName: "/sofa-removebg-preview.png",
      text: "Furniture",
      id: 4,
    },
    {
      imageName: "/sunGlass-removebg-preview.png",
      text: "Sun Glass",
      id: 5,
    },
    {
      imageName: "/washing_machine-removebg-preview.png",
      text: "Washing Machine",
      id: 6,
    },
    {
      imageName: "/blutooth-removebg-preview.png",
      text: "Bluetooth",
      id: 7,
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold my-10 text-center">Best Selling Products</h1>
      <div className="relative">
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
