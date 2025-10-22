"use client";
import React, { useEffect, useState } from "react";

const all_payment_manager = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const paymentFunc = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/save-payment", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch payments");
        const data = await res.json();
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    paymentFunc();
  }, []);

  console.log("this is the payment", payments);

  return (
    <div>
      <div
        className="container p-2 mx-auto sm:p-4 dark:text-gray-800"
        bis_skin_checked="1"
      >
        <div className="overflow-x-auto" bis_skin_checked="1">
          <table className="min-w-full text-xs">
            <colgroup>
              <col className="w-32" />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gradient-to-r from-[#ba181b] via-[#f95738] to-[#ee6c4d] to-90%">
              <tr className="text-left">
                <th className="p-3">Transaction</th>
                <th className="p-3">Email</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Card name</th>
                <th className="p-3 ">Amount</th>
                <th className="p-3">Payment status</th>
              </tr>
            </thead>
            {payments.map((item) => (
              <tbody>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 ">
                  <td className="p-5 truncate ">
                    <p>{item?.transaction_id}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.createdAt?.split("T")[0]}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.name}</p>
                  </td>
                  <td className="p-3 ">
                    <p>${item?.amount_total}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <span>{item?.payment_status}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default all_payment_manager;
