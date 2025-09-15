"use client";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllProductPage = () => {
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
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <div className="w-full h-[250px]  bg-gray-500/20 max-w-7xl mx-auto flex justify-between md:flex-row flex-col-reverse">
        <div className="pl-5 pt-7">
          <h1 className="text-5xl">
            <span className="text-orange-400">E</span>xperience Shopping Like{" "}
            <br />
            <span className="text-yellow-500">Never Before</span>
          </h1>
          <p className="text-xl mt-6 text-gray-700">
            Handpicked collections, unbeatable quality, and exclusive offers
            made for you.
          </p>
        </div>
        <Image
          src="/model.webp"
          alt="banner Image"
          width={800}
          height={800}
          className=" w-[240px] h-[240px]  "
        />
      </div>
      {/* main content */}
      <section className="grid grid-cols-12 max-w-7xl mx-auto gap-3.5 ">
        {/* Sidebar */}
        <div className="bg-white shadow-md rounded-xl p-4 space-y-6 h-fit sticky top-20 hidden md:block md:col-span-3 lg:col-span-2 mt-8">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2  border border-amber-400  focus:outline-none bg-gray-50"
            />
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-red-500">Bluetooth</li>
              <li className="cursor-pointer hover:text-red-500">Camera</li>
              <li className="cursor-pointer hover:text-red-500">Laptop</li>
              <li className="cursor-pointer hover:text-red-500">Watch</li>
              <li className="cursor-pointer hover:text-red-500">Phone</li>
              <li className="cursor-pointer hover:text-red-500">Jeans</li>
              <li className="cursor-pointer hover:text-red-500">Shoes</li>
              <li className="cursor-pointer hover:text-red-500">T-shirts</li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Price Range</h2>
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full bg-yellow-400"
            />
            <p className="text-sm text-gray-500">Up to $1000</p>
          </div>

          {/* Brands */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Brands</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Nike
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Adidas
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Samsung
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Apple
              </label>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          {/* Sort By */}
          <div className="flex justify-end items-center gap-2  mt-6">
            <h2 className="font-semibold text-lg ">Sort By :</h2>
            <select className="w-[150px] p-2 border border-amber-300 ">
              <option value="latest">Latest</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 md:mx-0 mx-4">
            {products.map((product) => (
              <Cards key={product._id} data={product} />
            ))}
          </section>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default AllProductPage;
