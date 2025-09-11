"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const router = useRouter();
  //   const session = useSession();
  // handle the login
  const handleLogin = (providerName) => {
    signIn(providerName);
  };
  //   handle the redirect
  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/");
  //     //   toast.success("you successfully login");
  //     }
  //   }, [session?.status]);

  return (
    <div className="flex gap-6">
      <button
        onClick={() => handleLogin("google")}
        className="btn btn-outline bg-black/80 text-white w-full mt-5 "
      >
        <FcGoogle size={28} />
        <span>google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
