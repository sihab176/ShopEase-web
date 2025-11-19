import React from "react";
import { inView, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ReviewBar = () => {
  const ratings = [
    { stars: 5, percent: 90 },
    { stars: 4, percent: 70 },
    { stars: 3, percent: 45 },
    { stars: 2, percent: 20 },
    { stars: 1, percent: 10 },
  ];
  return (
    <div>
      <div>
        <div className="bg-[#ffffff] p-2  w-full text-white shadow-xl border-black  border-l-4">
          <h2 className="font-semibold text-sm mb-1 text-gray-500">
            Progress bars 
          </h2>

          {ratings.map((rate, index) => (
            <div key={index} className="flex items-center gap-3 mb-1.5">
              {/* Left stars (gray) */}
              <div className="flex text-gray-500 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < rate.stars ? "text-yellow-400 " : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-[180px] bg-gray-700 rounded-full h-1.5 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${rate?.stars * 20}%` : 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="h-2 rounded-full bg-orange-600"
                ></motion.div>
              </div>

              {/* Right stars (yellow) */}
              {/* <div className="flex text-yellow-400">
                {Array.from({ length: rate.stars }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewBar;
