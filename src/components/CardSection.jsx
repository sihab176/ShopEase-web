import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import LoadingComponent from "./LoadingComponent";

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
  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-20 mx-4">
          {products.map((product) => (
            <Cards key={product._id} data={product} />
          ))}
        </section>
      )}
    </div>
  );
};

export default CardSection;
