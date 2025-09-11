"use client";
// import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import { signIn } from "next-auth/react";

import React from "react";

const RegisterFrom = () => {
  const handleSubmit =async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    // const res= await  RegisterUser({ name, email, password });

    if(res.success){
      await signIn("credentials",{
        redirect: true,
        email,
        password,
        callbackUrl:"/"
      })
    }
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
          <input type="checkbox" className="form-checkbox" />
          <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
            Remember me
          </span>
        </label>
        <input type="submit" className="btn bg-amber-300 hover:bg-amber-400 w-full mt-5 " value="signup" />
      </div>
    </form>
  );
};

export default RegisterFrom;