import React from "react";

import Link from "next/link";
import RegisterFrom from "./components/RegisterFrom";
import SocialLogin from "../login/components/SocialLogin";

const registerPage = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
        <div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 xl:p-12 sm:w-2/4 lg:w-full">
          <h1 className="mt-10 mb-4 text-2xl font-light text-left text-gray-800">
            sign up to your account
          </h1>
          {/* from import  */}
          <RegisterFrom />

          <div className="my-6 space-y-2">
            <p className="text-xs text-gray-600">
              Already have an account?
              <Link
                href="/login"
                className="text-purple-700 hover:text-black border-b border-purple-700 ml-2"
              >
                 login your account
              </Link>
            </p>

            <div>
              <SocialLogin />
            </div>
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

export default registerPage;
