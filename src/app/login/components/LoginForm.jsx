"use client";
import React from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  //handle login =================================>
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const result = await signIn("credentials", {
      redirect: false, // 👈 prevents full page reload
      email,
      password,
    });

    if (result.error) {
      toast.error("authentication field");
    } else {
      router.push("/");
      form.reset();
      toast.success("Successfully Login")
    }
  };

  return (
    <form onSubmit={handleLogin} className="pb-1 space-y-4">
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">
          Your Email
        </span>
        <input
          className="form-input border px-8 py-2 w-full focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:outline-none transition-all duration-300 "
          type="email"
          placeholder="Ex. james@bond.com"
          name="email"
          required
        />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700 ">
          Your Password
        </span>
        <input
          className="form-input border px-8 py-2 w-full focus:border-red-700 focus:ring-1 focus:ring-red-700 focus:outline-none transition-all duration-300"
          type="password"
          placeholder="••••••••"
          name="password"
          required
        />
      </label>
      <div className=" items-center justify-between">
        <label className="flex items-center">
          <input required type="checkbox" className="form-checkbox" />
          <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
            i agree to the terms and conditions
          </span>
        </label>
        <button className="bg-gradient-to-r from-[#ba181b] via-[#f95738] to-[#ee6c4d] hover:bg-gradient-to-r hover:from-[#a01517] hover:via-[#e04328] hover:to-[#d95e41] w-full mt-5 text-white py-2 rounded transition-all duration-300">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
