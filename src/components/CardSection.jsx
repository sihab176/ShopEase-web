import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import LoadingComponent from "./LoadingComponent";
import { motion } from "framer-motion";

const CardSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/product", {
          cache: "no-store",
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // console.log(products);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // একটার পর একটা আসবে
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-20 mx-4"
        >
          {products.map((product) => (
            <Cards key={product._id} data={product} />
          ))}
        </motion.section>
      )}
    </div>
  );
};

export default CardSection;
