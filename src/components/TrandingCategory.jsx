import { FaHeadphones, FaTshirt, FaShoePrints, FaTv, FaClock, FaMobileAlt, FaVideo, FaGlasses, FaChild, FaGem, FaIndustry } from "react-icons/fa";

const categories = [
  { name: "Headphones", icon: <FaHeadphones size={30} /> },
  { name: "Watches", icon: <FaClock size={30} /> },
  { name: "Washing Machine", icon: <FaIndustry size={30} /> },
  { name: "iPhones", icon: <FaMobileAlt size={30} /> },
  { name: "Goggles", icon: <FaGlasses size={30} /> },
  { name: "Video Camera", icon: <FaVideo size={30} /> },
  { name: "Men's Wear", icon: <FaTshirt size={30} /> },
  { name: "Kid's Wear", icon: <FaChild size={30} /> },
  { name: "Accessories", icon: <FaGem size={30} /> },
  { name: "Men's Shoes", icon: <FaShoePrints size={30} /> },
  { name: "Television", icon: <FaTv size={30} /> },
  { name: "Men's Pants", icon: <FaTshirt size={30} /> },
];

const  TrandingCategory=()=> {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Trending Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 ">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 hover:bg-teal-100 transition-all rounded-full shadow-md cursor-pointer mb-3"
          >
            <div className="text-teal-600 mb-3">{cat.icon}</div>
            <p className="text-sm font-medium text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TrandingCategory