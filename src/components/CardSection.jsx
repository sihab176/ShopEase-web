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
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

  return (
    <div>
      {loading ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-20 mx-4">
          {Skeleton.map((data) => (
            <div 
            key={data}
              className=" rounded shadow-md w-60 sm:w-60 animate-pulse h-96"
              bis_skin_checked="1"
            >
              <div
                className="h-48 rounded-t dark:bg-gray-300"
                bis_skin_checked="1"
              ></div>
              <div
                className="flex-1 px-3 py-8 space-y-4 sm:px-4  dark:bg-gray-50"
                bis_skin_checked="1"
              >
                <div
                  className="w-full h-4 rounded dark:bg-gray-300"
                  bis_skin_checked="1"
                ></div>
                <div
                  className="w-full h-4 rounded dark:bg-gray-300"
                  bis_skin_checked="1"
                ></div>
                <div
                  className="w-3/4 h-4 rounded dark:bg-gray-300"
                  bis_skin_checked="1"
                ></div>
                <div className="flex justify-between">
                  <div
                    className="w-3/7 h-4 rounded dark:bg-gray-300"
                    bis_skin_checked="1"
                  ></div>
                  <div
                    className="w-3/7 h-7 rounded-full dark:bg-gray-300"
                    bis_skin_checked="1"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </section>
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
