import React from "react";

import Link from "next/link";
import RegisterFrom from "./components/RegisterFrom";
import SocialLogin from "../login/components/SocialLogin";
import Image from "next/image";

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
          <Image
            src="/loginImage.jpeg"
            alt="register image"
            width={800}
            height={800}
            className="object-cover w-full h-64 min-h-full bg-gray-100"
          />
        </div>
      </section>
    </div>
  );
};

export default registerPage;
