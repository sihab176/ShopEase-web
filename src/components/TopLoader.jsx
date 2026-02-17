// "use client";
// import { motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const TopLoader = ({ children }) => {
//    const pathname = usePathname();

//   const [loading, setLoading] = useState(false);
 
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [pathname]);

//   const blocks = Array.from({ length: 10 });

//   return (
//     <>
//       {loading && (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] font-sans">
//           {/* Outer Progress Bar Container */}
//           <div className="relative w-full max-w-md h-16 border-[3px] border-[#00E5FF] rounded-3xl p-2 flex items-center overflow-hidden">
//             {/* Animated Blocks Container */}
//             <div className="flex gap-2 w-full">
//               {blocks.map((_, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0.2, backgroundColor: "#083344" }}
//                   animate={{
//                     opacity: 1,
//                     backgroundColor: "#00E5FF",
//                     boxShadow: "0px 0px 15px rgba(0, 229, 255, 0.6)",
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     delay: index * 0.1, // একটার পর একটা জ্বলে ওঠার ইফেক্ট
//                   }}
//                   className="h-10 w-8 rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Loading Text */}
//           <motion.div
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             transition={{
//               duration: 1,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//             className="mt-10 flex items-center gap-2"
//           >
//             <h1 className="text-[#00E5FF] text-5xl font-medium tracking-[0.2em] uppercase">
//               Loading <span className="inline-block animate-pulse">...</span>
//             </h1>
//           </motion.div>

//           {/* Background Glow (Optional: ছবির গভীরতা বাড়ানোর জন্য) */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#00E5FF] opacity-10 blur-[100px] pointer-events-none"></div>
//         </div>
//       )}
//       {children}
//     </>
//   );
// };

// export default TopLoader;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TopLoader = ({ children }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);

  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   // Wait until browser paints new page
  //   requestAnimationFrame(() => {
  //     handleLoad();
  //   });

  // }, [pathname]);

    useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname]);
  const blocks = Array.from({ length: 10 });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-[#020617] z-[9999]"
          >
            <div className="relative w-full max-w-md h-16 border-[3px] border-[#c04f23] rounded-3xl p-2 flex items-center overflow-hidden">
              <div className="flex gap-2 w-full">
                {blocks.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.2, backgroundColor: "#083344" }}
                    animate={{
                      opacity: 1,
                      backgroundColor: "#c04f23",
                      boxShadow:
                        "0px 0px 15px rgba(0, 229, 255, 0.6)",
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.1,
                    }}
                    className="h-10 w-8 rounded-lg"
                  />
                ))}
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-[#bb5a2d] text-5xl font-medium tracking-[0.2em] uppercase mt-10"
            >
              Loading...
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};

export default TopLoader;
