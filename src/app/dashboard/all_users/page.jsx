"use client";
import React, { useEffect, useState } from "react";

const all_users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const paymentFunc = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/all_user_Api", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch payments");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    paymentFunc();
  }, []);

  console.log("this is the payment", users);

  return (
    <div>
      <div
        className="container p-2 mx-auto sm:p-4 dark:text-gray-800"
        bis_skin_checked="1"
      >
        <div className="overflow-x-auto" bis_skin_checked="1">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-gradient-to-r from-[#ba181b] via-[#f95738] to-[#ee6c4d] to-90%">
              <tr className="text-left">
                <th className="p-3">Users Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Register</th>
                <th className="p-3">Last Login</th>
              </tr>
            </thead>
            {users.map((item) => (
              <tbody>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50 ">
                  <td className="p-5 truncate ">
                    <p>{item?.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.createdAt?.split("T")[0]}</p>
                  </td>
                  <td className="p-3">
                    <p>{item?.updatedAt?.split("T")[0]}</p>
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

export default all_users;
