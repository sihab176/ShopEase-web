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
          className="form-input border px-8 py-2 w-full"
          type="email"
          placeholder="Ex. james@bond.com"
          name="email"
          required
        />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">
          Your Password
        </span>
        <input
          className="form-input border px-8 py-2 w-full"
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
        <button className="bg-orange-600  hover:bg-orange-700 w-full btn  mt-5">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
