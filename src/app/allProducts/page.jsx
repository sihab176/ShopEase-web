"use client";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("latest");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [page, setPage] = useState(1); // বর্তমান পেইজ
  const [totalPages, setTotalPages] = useState(2); // মোট কয়টা পেইজ

  const fetchData = async () => {
    try {
      const params = new URLSearchParams({
        search,
        category,
        brand,
        sort,
        maxPrice,
        page,
        limit: 8,
      });

      const res = await fetch(
        `https://shop-ease-six-xi.vercel.app/api/product/implement-func?${params.toString()}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, category, brand, sort, maxPrice, page]);

  return (
    <div>
      <Navbar />

      {/* Banner */}
      <div className="w-full h-[250px] bg-gray-500/20 max-w-7xl mx-auto flex justify-between md:flex-row flex-col-reverse">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full p-2 border border-amber-400 focus:outline-none bg-gray-50"
            />
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "bluetooth",
                "camera",
                "laptop",
                "watch",
                "phone",
                "jeans",
                "shoes",
                "Tshirts",
              ].map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer hover:text-yellow-400 ${
                    category === cat ? "font-bold text-yellow-500" : ""
                  }`}
                  onClick={() => setCategory(category === cat ? "" : cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Price Range</h2>
            <input
              type="range"
              min="0"
              max="100000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-yellow-400"
            />
            <p className="text-sm text-gray-500">Up to ${maxPrice}</p>
          </div>

          {/* Brands */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Brands</h2>
            <div className="space-y-2">
              {["Dell", "Canon", "Samsung", "Apple"].map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={brand === b}
                    onChange={() => setBrand(brand === b ? "" : b)}
                  />
                  {b}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          {/* Sort By */}
          <div className="flex justify-end items-center gap-2  mt-6">
            <h2 className="font-semibold text-lg ">Sort By :</h2>
            <select
              className="w-[180px] p-2 border border-amber-300"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 md:mx-0 mx-4">
            {products.length > 0 ? (
              products.map((product) => (
                <Cards key={product._id} data={product} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No products found.
              </p>
            )}
          </section>
        </div>
      </section>
      {/* ✅ Pagination Controls */}
      <section>
        <div className="flex justify-center items-center gap-2 mb-10 md:ml-12 ">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                page === i + 1 ? "bg-orange-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProductPage;
