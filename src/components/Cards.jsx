import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = ({ data }) => {
  const { description, category, name, image, _id,offerPrice } = data || {};
  const rating = 4;
  console.log("data===>", data);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      key={data._id}
      className="flex flex-col   shadow p-3 rounded hover:shadow-xl hover:shadow-yellow-200"
    >
      <div className=" group relative  rounded-lg w-full h-64 flex items-center justify-center">
        <Image
          src={`${image[0]}`}
          alt="name"
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full "
          width={400}
          height={400}
        />
        <button className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md">
          <FaRegHeart className="text-red-600 h-4 w-4" />
        </button>
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">{name}</p>
      <p className="w-full text-xs text-gray-500/70  truncate">{description}</p>
      <div className="flex items-center gap-2">
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
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <p className="text-base font-medium"><span>Price: $</span> {offerPrice}</p>
        <Link href={`productDetails/${_id}`}>
          <button className=" cursor-pointer  px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
            Buy now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Cards;
