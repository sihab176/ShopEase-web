
import { FaHeart, FaShoppingBag } from 'react-icons/fa';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      tag: "HOODIE",
      title: "COZYCOMFORT HOODIE",
      price: "$249.00",
      image: "/boyHoddy1.JPG", // Replace with your image path
      large: true
    },
    {
      id: 2,
      tag: "SWEATERS",
      title: "EXTURED LONG SLEEVE SWEATER",
      price: "$149.00",
      image: "https://i.ibb.co.com/jPh5D00H/huddy.jpg", // Replace with your image path
      large: false
    },
    {
      id: 3,
      tag: "T-SHIRT",
      title: "VINTAGE WASHED T-SHIRT",
      price: "$199.00",
      image: "https://i.ibb.co.com/C53tZnfr/huddy2.jpg", // Replace with your image path
      large: false
    }
  ];

  return (
    <section className="bg-[#F5F1E9] p-6 md:p-12 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side: Large Product Card */}
        <div className="relative group overflow-hidden rounded-[40px] h-[600px]">
          <img 
            src={products[0].image} 
            alt={products[0].title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Top Tag */}
          <span className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
            {products[0].tag}
          </span>
          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="bg-white p-6 rounded-[30px] flex justify-between items-center w-full max-w-[350px]">
              <div>
                <h3 className="text-xl font-black leading-tight tracking-tighter w-40">{products[0].title}</h3>
              </div>
              <span className="bg-[#E94E1B] text-white px-4 py-2 rounded-xl text-sm font-bold">{products[0].price}</span>
            </div>
            <div className="flex bg-white p-2 rounded-full shadow-lg gap-1">
                <button className="p-3 hover:bg-gray-100 rounded-full transition"><FaHeart size={20}/></button>
                <div className="w-[1px] h-10 bg-gray-200"></div>
                <button className="p-3 hover:bg-gray-100 rounded-full transition"><FaShoppingBag size={20}/></button>
            </div>
          </div>
        </div>

        {/* Right Side: Two Smaller Cards */}
        <div className="flex flex-col gap-6">
          {products.slice(1).map((product) => (
            <div key={product.id} className="relative group overflow-hidden rounded-[40px] h-[288px]">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Top Tag */}
              <span className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                {product.tag}
              </span>
              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-white p-4 rounded-2xl flex justify-between items-center w-full max-w-[280px]">
                  <h3 className="text-[10px] font-black leading-tight tracking-tighter uppercase w-28">{product.title}</h3>
                  <span className="bg-[#E94E1B] text-white px-3 py-1 rounded-lg text-[10px] font-bold">{product.price}</span>
                </div>
                <div className="flex bg-white p-2 rounded-full shadow-lg gap-1 scale-75 origin-right">
                    <button className="p-3 hover:bg-gray-100 rounded-full transition"><FaHeart size={20}/></button>
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    <button className="p-3 hover:bg-gray-100 rounded-full transition"><FaShoppingBag size={20}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;