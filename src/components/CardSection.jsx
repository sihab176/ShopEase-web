import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const CardSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/product", {
        cache: "no-store",
      });
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  // console.log(products);
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-20">
        {products.map((product) => (
          <Cards key={product._id} data={product} />
        ))}
      </section>
    </div>
  );
};

export default CardSection;
