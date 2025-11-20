// "use client";
// import Image from "next/image";

// const HotCategory = () => {
//   const deals = [
//     {
//       id: 1,
//       title: "UNDER $99 STORE",
//       subtitle: "HOT DEALS",
//       btn: "SHOP NOW",
//       image: "/sofa-removebg-preview.png",
//       bg: "bg-[#e6ccb2]",
//     },
//     {
//       id: 2,
//       title: "EXTRA 5% OFF ",
//       subtitle: "HOT DEALS",
//       btn: "SHOP NOW",
//       image: "/headPhone-removebg-preview.png",
//       bg: "bg-[#ffe5d9]",
//     },
//     {
//       id: 3,
//       title: "EXTRA $55 OFF",
//       subtitle: "HOT DEALS",
//       btn: "ORDER NOW",
//       image: "/iphone-removebg-preview.png",
//       bg: "bg-[#d8e2dc]",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">🔥 Hot Deals</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {deals.map((deal) => (
//           <section key={deal.id} className={`${deal.bg} flex justify-between p-10`}>
//             <div>
//               <h2 className="text-4xl font-bold">{deal.title}</h2>
//               <button className="btn mt-4 bg-[#9db4c0]">{deal.btn}</button>
//             </div>
//             <Image src={deal.image} alt="image" width={120} height={120} />
//           </section>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default HotCategory;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HotCategory = () => {
  const deals = [
    {
      id: 1,
      title: "UNDER $99 STORE",
      subtitle: "HOT DEALS",
      btn: "SHOP NOW",
      image: "/sofa-removebg-preview.png",
      bg: "bg-[#e6ccb2]",
    },
    {
      id: 2,
      title: "EXTRA 5% OFF ",
      subtitle: "HOT DEALS",
      btn: "SHOP NOW",
      image: "/headPhone-removebg-preview.png",
      bg: "bg-[#cce3de]",
    },
    {
      id: 3,
      title: "EXTRA $55 OFF",
      subtitle: "HOT DEALS",
      btn: "ORDER NOW",
      image: "/iphone-removebg-preview.png",
      bg: "bg-[#d8e2dc]",
    },
  ];

  // Card Animation Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🔥 Hot Deals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <motion.section
            key={deal.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              rotate: -1,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
            }}
            className={`${deal.bg} flex justify-between items-center p-10 rounded-xl transition-all cursor-pointer`}
          >
            {/* Left Text */}
            <div>
              <motion.h2
                className="text-4xl font-bold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {deal.title}
              </motion.h2>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="btn mt-4 bg-[#9db4c0] hover:bg-[#7c9aa8] text-white"
              >
                {deal.btn}
              </motion.button>
            </div>

            {/* Image with Floating Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image src={deal.image} alt="image" width={120} height={120} />
            </motion.div>
          </motion.section>
        ))}
      </div>
    </section>
  );
};

export default HotCategory;

