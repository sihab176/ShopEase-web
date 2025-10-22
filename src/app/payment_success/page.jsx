"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PaymentSuccessPage = () => {
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState("");

  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  // post the  transition of payment ----------------->
  useEffect(() => {
    if (session_id) {
      const postData = async () => {
        const res = await fetch("/api/save-payment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ session_id }),
        });
        const data = await res.json();
        console.log("this is the session id data", data);
      };
      postData();
    }
  }, [session_id]);

  //  for rating --------------------------------------->
  // modal -->
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // handle submit review ------------------------------>
  const handleSubmit = (e) => {};
  console.log(rating);

  return (
    <div className="">
      {/* payment success */}
      <div className="flex justify-center">
        <section className=" bg-base-100 md:w-7xl w-full shadow-2xl py-3 flex flex-col justify-center items-center  ">
        <figure className="flex justify-center">
          <img src="/check.png" alt="success logo" className="w-28" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold ">
            Your payment was successful
          </h2>
          <p className="">
            Thank you for your payment. we will <br />
            be in contact with more details shortly
          </p>

          <Link href={"/"}>
            <button className="btn bg-green-400  mt-4">
              Continue Shopping <span className="text-2xl">&rarr;</span>{" "}
            </button>
          </Link>
        </div>
      </section>
      </div>
      {/* modal for review */}
      <section>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50">
            {/* Modal box */}
            <div className=" bg-white rounded-2xl shadow-2xl md:max-w-4/8  w-full p-6 relative md:mx-auto mx-2 ">
              <div className="text-center">
                <figure className="flex justify-center items-center">
                  <img
                    src="/speech-bubble.png"
                    alt="success logo"
                    className="w-28"
                  />
                </figure>
                <h3 className="md:text-4xl text-2xl font-bold my-5 ">
                  Submit Your Feedback
                </h3>
                <p>
                  We value your thoughts! Please share your honest feedback
                  about the <br /> current prices and your overall experience.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Rating stars */}
                <div className=" text-center lg:text-5xl md:text-4xl text-2xl text-yellow-500">
                  <Rating
                    initialRating={rating}
                    onChange={(value) => setRating(value)}
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    fractions={1}
                  />
                </div>

                {/* Textarea */}
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your opinion on current price..."
                  className="textarea w-full focus:border-[#a7c957] focus:ring-1"
                  rows="4"
                  required
                ></textarea>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className=" absolute top-0 right-2  text-3xl  hover:text-red-600"
                  >
                    <i>X</i>
                  </button>
                  <button
                    type="submit"
                    onClick={() => setShowModal(false)}
                    className="btn bg-[#a7c957] hover:bg-[#89a546]  w-full mt-4 py-5"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PaymentSuccessPage;
