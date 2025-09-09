import Image from "next/image";
import React from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

const Cards = () => {
  const rating = 4;
  return (
    <div className="flex flex-col  cursor-pointer">
      <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
        <Image
          src={`/shopping-bag.png`}
          alt="name"
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <FaRegHeart className="text-red-600 h-4 w-4" />
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">.name</p>
      <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">
        discriptjion
      </p>
      <div className="flex items-center gap-2">
        <p className="text-xs">{4.0}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <FaStar key={index} className="text-yellow-500 h-4 w-4" />
            ) : (
              <FaRegStar key={index} className="text-gray-400 h-4 w-4" />
            )
          )}
        </div>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium">jljlsjljsjl</p>
        <button className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Cards;
