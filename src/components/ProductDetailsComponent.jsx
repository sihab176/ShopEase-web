"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductDetailsComponent = ({ productData }) => {
  const [mainImage, setMainImage] = useState(null);
  const { data: session, status } = useSession();
  console.log("status", status);

  // handel submit =================>
  const addToCart = async (id) => {
    console.log("id", id);

    const CartInfo = {
      product_name: productData?.name,
      product_image: productData?.image[0],
      product_price: productData?.offerPrice,
      product_category: productData?.category,
      user_email: session?.user?.email,
      user_name: session?.user?.name,
      quantity: 1,
    };

    console.log("cart info", CartInfo);

    const res = await fetch("http://localhost:3000/api/addToCart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(CartInfo),
    });
    const data = await res.json();
    console.log("DATA============>", data);
    if (data) {
      toast.success("Successfully added to cart");
    } else {
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div>
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
              <Image
                src={mainImage || productData.image[0]}
                alt="alt"
                className="w-full h-auto object-cover mix-blend-multiply"
                width={1280}
                height={720}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                >
                  <Image
                    src={image}
                    alt="alt"
                    className="w-full h-auto object-cover mix-blend-multiply"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
              {productData.name}
            </h1>
            {/* <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image
                                className="h-4 w-4"
                                src={assets.star_dull_icon}
                                alt="star_dull_icon"
                            />
                        </div>
                        <p>(4.5)</p>
                    </div> */}
            <p className="text-gray-600 mt-3">{productData.description}</p>
            <p className="text-3xl font-medium mt-6">
              ${productData.offerPrice}
              <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                ${productData.price}
              </span>
            </p>
            <hr className="bg-gray-600 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium">Brand </td>
                    <td className="text-gray-800/50 ">{productData.brand}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">stock</td>
                    <td className="text-gray-800/50 ">{productData.stock}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Category</td>
                    <td className="text-gray-800/50">{productData.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <button
                disabled={status !== "authenticated"}
                onClick={() => addToCart(productData._id)}
                className={`w-full py-3.5  text-gray-800/80  transition ${
                  status === "authenticated"
                    ? "bg-green-200 hover:bg-green-300 active:bg-green-800"
                    : "bg-gray-400 disabled:cursor-pointer"
                }}`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(productData._id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
