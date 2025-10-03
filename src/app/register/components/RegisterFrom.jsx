"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";

import React from "react";
import toast from "react-hot-toast";

const RegisterFrom = () => {
  const handleSubmit =async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    const res= await  registerUser({ name, email, password });

    if(res.success){
      toast.success("successfully sign in")
      await signIn("credentials",{
        redirect: true,
        email,
        password,
        callbackUrl:"/"
      })
    }
    console.log("res ============>", res);
  };

  return (
    <form onSubmit={handleSubmit} className="pb-1 space-y-4">
      {/* name */}
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">
          Your name
        </span>
        <input
          className="form-input border px-8 py-2 w-full"
          type="text"
          placeholder="write your name"
          name="name"
          required
        />
      </label>
      {/* email */}
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
      <div className="justify-between">
        <label className="flex items-center">
          <input required type="checkbox" className="form-checkbox" />
          <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
            i agree to the terms and conditions
          </span>
        </label>
        <input type="submit" className="btn bg-orange-600  hover:bg-orange-700 w-full mt-5 " value="signup" />
      </div>
    </form>
  );
};

export default RegisterFrom;