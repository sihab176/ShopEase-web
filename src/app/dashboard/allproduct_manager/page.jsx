"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const productManager = () => {
  const [allProduct, SetAllProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/product/productManager`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      SetAllProduct(data);
    };
    fetchData();
  }, []);
  console.log("all Product =========", allProduct);
  return (
    <div>
      <section>
        <div
          className="container p-2 mx-auto sm:p-4 dark:text-gray-800"
          bis_skin_checked="1"
        >
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Contacts
          </h2>
          <div className="overflow-x-auto" bis_skin_checked="1">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col className="w-5" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-5" />
              </colgroup>
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">Image</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Brand</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              {allProduct?.map((singleProduct) => (
                <tbody
                  key={singleProduct._id}
                  className="border-b dark:bg-gray-50 dark:border-gray-300"
                >
                  <tr>
                    <td className=" ">
                      <Image
                        src={singleProduct?.image[0]}
                        alt="product"
                        width={260}
                        height={220}
                      />
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleProduct?.name}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p className="dark:text-gray-600">
                        {singleProduct?.category}
                      </p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleProduct?.brand}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{singleProduct?.seller_email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p className="dark:text-gray-600">
                        $ {singleProduct?.offerPrice}
                      </p>
                    </td>
                    <td className="px-3 py-2 flex items-center">
                      <button
                        type="button"
                        title="Delete"
                        className="p-1 rounded-full dark:text-red-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                      >
                        <MdOutlineDelete size={24}/>
                      </button>
                      <button
                        type="button"
                        title="Open details"
                        className="p-1 rounded-full dark:text-green-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                      >
                      Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default productManager;
