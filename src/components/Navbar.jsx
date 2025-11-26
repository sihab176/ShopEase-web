"use client";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Link from "next/link";
import ProfileNav from "./ProfileNav";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const { data: session, status } = useSession();
  const [addProduct, setAddProduct] = useState(0);
  // console.log("session ===========>", session);
  useEffect(() => {
    if (!session?.user?.email) return;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/addToCart/${session.user.email}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setAddProduct(data.length);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchData();
  }, [session?.user?.email]);

  // handle my cart
  const handleMyCart=()=>{
    if(status === "unauthenticated"){
       return router.push("/login");
    }else{
      router.push("/my-cart")
    }

  }

  return (
    <nav className="w-full bg-[#eff1ed] shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Brand Name */}
        <button
          className="btn  font-semibold md:hidden"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          ☰
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <Link
              href="/"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/allProducts"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/allProducts"
                  ? "text-orange-600"
                  : "text-gray-700"
              }`}
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              href="/AboutPage"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/AboutPage" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact_us"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/Contact_us" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Contact us
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/dashboard"
                className={`font-semibold transition-colors hover:text-orange-600 ${
                  pathname === "/dashboard"
                    ? "text-orange-600"
                    : "text-gray-700"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
        {/* logo  */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/shopping-bag.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-gray-800">
            <span className="text-orange-600">Shop</span>Ease
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="md:flex hidden gap-8 items-center ">
          <li>
            <Link
              href="/"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/allProducts"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/allProducts"
                  ? "text-orange-600"
                  : "text-gray-700"
              }`}
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              href="/AboutPage"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/AboutPage" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact_us"
              className={`font-semibold transition-colors hover:text-orange-600 ${
                pathname === "/Contact_us" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Contact us
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/dashboard"
                className={`font-semibold transition-colors hover:text-orange-600 ${
                  pathname === "/dashboard"
                    ? "text-orange-600"
                    : "text-gray-700"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {/* Right Side: Auth Buttons / User */}
        <div className="flex items-center gap-4">
          {session ? (
            <ProfileNav session={session} /> // 👈 avatar + dropdown here
          ) : (
            <Link
              href="/login"
              className="btn bg-orange-600 hover:bg-orange-700 text-white font-semibold"
            >
              Login
            </Link>
          )}
          <div onClick={handleMyCart}>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle   border border-gray-300 relative"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm absolute top-0 rounded-full indicator-item bg-gray-50 shadow text-orange-600 ">
                    {addProduct}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-44 shadow"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
