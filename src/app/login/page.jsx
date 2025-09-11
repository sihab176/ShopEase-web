"use client";
import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import SocialLogin from "./components/SocialLogin";

const LoginPage = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
        <div className="w-full col-span-1 p-4 mx-auto mt-18 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full ">
          <h1 className="mt-6 mb-4 text-xl font-semibold text-left text-gray-800 ">
            Log in to your account
          </h1>
          {/* import login form */}
          <LoginForm />
          <div className="my-6 space-y-2">
            <p className="text-xs text-gray-600">
              Don't have an account?
              <Link
                href="/register"
                className="text-purple-700 hover:text-black border-b border-purple-700"
              >
                Create an account
              </Link>
            </p>
            {/* social login */}
            <SocialLogin />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <img
            src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="3 women looking at a laptop"
            className="object-cover w-full h-64 min-h-full bg-gray-100"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
