"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = ({ data }) => {
  const { description, category, name, image, _id, offerPrice } = data || {};
  const rating = 4;
  // console.log("data===>", data);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col   shadow p-3 rounded hover:shadow-2xl group"
    >
      <div className=" group relative  rounded-lg w-full h-64 flex items-center justify-center">
        <Image
          src={image && image[0] ? image[0] : "/ab-pic-1.avif"}
          alt={name || "product image"}
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full "
          width={400}
          height={400}
        />
        <button className="absolute top-0 right-0  text-gray-500 bg-gray-100 px-1 text-sm rounded shadow-md">
          {/* <FaRegHeart className="text-red-600 h-4 w-4" /> */}
          SALE
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">{name}</p>
       <p className="text-base font-medium">
          <span>Price: $</span> {offerPrice}
        </p>
      <p className="w-full text-xs text-gray-500/70  truncate">{description}</p>
      
      {/* <div className="flex items-center gap-2">
        <p className="text-xs">{4.0}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <FaStar key={index} className="text-yellow-500 h-3 w-3" />
            ) : (
              <FaRegStar key={index} className="text-gray-400 h-3 w-3" />
            )
          )}
        </div>
      </div> */}

      <div className="   w-full mt-1">
       
        <Link href={`/productDetails/${_id}`}>
          <button className=" cursor-pointer  px-4 py-1.5 text-gray-500 border border-gray-500/20 w-full bg-gray-100 text-xs group-hover:bg-black group-hover:text-white transition">
            Buy now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Cards;
