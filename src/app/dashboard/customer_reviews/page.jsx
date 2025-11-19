"use client";
import React, { useEffect, useState } from "react";
import ReviewBar from "./components/ReviewBar";
import { FaArrowUp, FaStar } from "react-icons/fa";

const customer_reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        const data = await res.json();
        setReviews(data || []);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  console.log(reviews);
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6     ">
        {/* Total Reviews Card */}
        <div className=" bg-white  shadow-xl  border-black w-full p-5 border-l-4 ">
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            Total Reviews
          </h3>
          <h2 className="text-3xl font-bold text-gray-900">10.0k</h2>
          <div className="flex items-center gap-2 mt-1">
            <FaArrowUp className="text-green-500 text-sm" />
            <p className="text-green-500 text-sm font-medium">7% ↑</p>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Growth in reviews so far this year
          </p>
        </div>

        {/* Average Rating Card */}
        <div className=" bg-white  shadow-xl  border-black w-full p-5 border-l-4">
          <h3 className="text-gray-500 text-sm font-medium mb-1">
            Average Rating
          </h3>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold text-gray-900">4.0</h2>
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-300" />
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Average rating so far this year
          </p>
        </div>
        {/* progress bar */}
        <div className="w-full">
          <ReviewBar />
        </div>
      </div>
      <section className="p-6  min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Customer Reviews
        </h1>

        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16 text-gray-600">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-lg">No reviews yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white border-2  border-gray-200 rounded shadow-xl p-3 hover:shadow-md transition-all duration-200"
              >
                {/* User Info */}
                <div className="mb-1">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.email}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating
                          ? "text-yellow-400 text-lg"
                          : "text-gray-300 text-lg"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  “{review.review}”
                </p>

                {/* Date */}
                <div className="mt-4 border-t pt-3 flex items-center text-gray-500 text-sm">
                  <span className="mr-2">📅</span>
                  {new Date(review.createdAt).toLocaleDateString("en-GB")}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default customer_reviews;
