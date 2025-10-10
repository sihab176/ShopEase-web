"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import OrderSummary from "@/components/OrderSummary";
import toast from "react-hot-toast";
import Link from "next/link";

const MyCart = () => {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  // Calculate grand total whenever products change
  useEffect(() => {
    if (products.length > 0) {
      const total = products.reduce(
        (acc, item) => acc + item.product_price * item.quantity,
        0
      );
      setGrandTotal(total.toFixed(2));
    } else {
      setGrandTotal(0);
    }
  }, [products]);

  // Fetch cart data
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/addToCart/${session.user.email}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchData();
  }, [session?.user?.email]);

  // Quantity +/- handlers
  const increment = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = async (id) => {
    const res = await fetch(
      `http://localhost:3000/api/addToCart/deletItem/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    if (res.ok) {
      toast.success("Item removed");

      // ✅ UI state থেকেও remove করো
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } else {
      toast.error(data.message || "Failed to remove item");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        {status === "loading" && (
          <p className="text-center text-4xl text-green-500">Loading cart...</p>
        )}

        {status === "authenticated" && products.length === 0 && (
          <p className="text-center text-lg mt-10">Your cart is empty.</p>
        )}

        {status === "authenticated" && products.length > 0 && (
          <div className="flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-32 pt-14 mb-20">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl md:text-3xl text-gray-500">
                  Your <span className="font-medium text-orange-600">Cart</span>
                </p>
                <span className="text-gray-500">{products.length} Items</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-t border-gray-200">
                  <thead className="text-left text-gray-500 uppercase text-sm border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-2">Product Details</th>
                      <th className="py-3 px-2">Price</th>
                      <th className="py-3 px-2">Quantity</th>
                      <th className="py-3 px-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item._id} className="border-b border-gray-100">
                        {/* Product Details */}
                        <td className="py-4 px-2 flex items-center gap-4">
                          <img
                            src={item.product_image}
                            alt={item.product_name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {item.product_name}
                            </span>
                            <button
                              onClick={() => removeItem(item._id)}
                              className="text-orange-500 text-sm mt-1 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="py-4 px-2 font-medium">
                          ${item.product_price.toFixed(2)}
                        </td>

                        {/* Quantity */}
                        <td className="py-4 px-2">
                          <div className="flex items-center border rounded w-max">
                            <button
                              onClick={() => decrement(item._id)}
                              className="px-3 text-gray-600 hover:bg-gray-100 transition"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                setProducts((prev) =>
                                  prev.map((i) =>
                                    i._id === item._id
                                      ? {
                                          ...i,
                                          quantity: Math.max(
                                            1,
                                            Number(e.target.value)
                                          ),
                                        }
                                      : i
                                  )
                                )
                              }
                              className="w-12 text-center border-l border-r outline-none"
                            />
                            <button
                              onClick={() => increment(item._id)}
                              className="px-3 text-gray-600 hover:bg-gray-100 transition"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Subtotal (per item) */}
                        <td className="py-4 px-2 font-medium">
                          ${(item.product_price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Continue Shopping */}
                <div className="mt-6">
                  <Link href={"/allProducts"}>
                    <button className="text-orange-500 hover:underline flex items-center gap-1">
                      &larr; Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div>
              <OrderSummary grandTotal={grandTotal} products={products} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCart;
