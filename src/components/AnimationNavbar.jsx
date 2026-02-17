"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FaShoppingCart } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ProfileNav from "./ProfileNav";


const AnimationNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // navbar item
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [addProduct, setAddProduct] = useState(0);
  useEffect(() => {
    if (!session?.user?.email) return;
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/addToCart/${session.user.email}`, {
          cache: "no-store",
        });
        const data = await res.json();
        setAddProduct(data.length);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchData();
  }, [session?.user?.email]);

  // handle my cart
  const handleMyCart = () => {
    if (status === "unauthenticated") {
      return router.push("/login");
    } else {
      router.push("/my-cart");
    }
  };

  // GSAP Animation Logic
  useEffect(() => {
    if (isOpen) {
      // Menu Open Animation
      gsap.to(menuRef.current, {
        top: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
      // Links stagger animation
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 },
      );
    } else {
      // Menu Close Animation
      gsap.to(menuRef.current, {
        top: "-100%",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Main Header */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 ">
        <div className="flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/shopping-bag.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-xl font-bold tracking-tighter text-gray-500 uppercase  scale-y-140">
              <span className="text-orange-600 ">Shop</span>Ease
            </h1>
          </Link>

          <div className="flex items-center gap-4">
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
                    className="btn btn-ghost btn-circle bg-gray-100  border border-gray-300 relative"
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

            {/* menu */}
            <div
              className="z-[110] cursor-pointer transition-all duration-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaX size={32} className="text-white" />
              ) : (
                <FcMenu size={32} />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed top-[-100%]  left-0 w-full h-screen bg-black text-white z-[90] flex flex-col justify-center items-center "
      >
        {/* <ul className="text-center space-y-8">
          {["Home", "Shop", "Collection", "About", "Contact"].map(
            (item, index) => (
              <li
                key={item}
                ref={(el) => (linksRef.current[index] = el)}
                className="text-5xl md:text-7xl font-bold uppercase hover:text-gray-400 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ),
          )}
        </ul> */}
        {/* Navigation Links */}
        <ul className="text-center space-y-8 ">
          <li>
            <Link
              href="/"
              className={`text-5xl md:text-7xl  uppercase hover:text-gray-400 transition-colors cursor-pointer scale-y-135 font-black leading-none tracking-tighter  ${
                pathname === "/" ? "text-gray-400" : "text-gray-700 scale-y-135"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/allProducts"
              className={`text-5xl md:text-7xl  uppercase hover:text-gray-400 transition-colors cursor-pointer font-black scale-y-135 leading-none tracking-tighter ${
                pathname === "/allProducts"
                  ? "text-gray-400"
                  : "text-gray-700"
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/AboutPage"
              className={`text-5xl md:text-7xl  uppercase hover:text-gray-400 transition-colors cursor-pointer scale-y-135 font-black leading-none tracking-tighter ${
                pathname === "/AboutPage" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Contact_us"
              className={`text-5xl md:text-7xl  uppercase hover:text-gray-400 transition-colors cursor-pointer scale-y-135 font-black leading-none tracking-tighter ${
                pathname === "/Contact_us" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </li>
          {session?.user?.role === "admin" && (
            <li>
              <Link
                href="/dashboard"
                className={`text-5xl md:text-7xl  uppercase hover:text-gray-400 transition-colors cursor-pointer scale-y-135 font-black leading-none tracking-tighter ${
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
      </div>
    </>
  );
};

export default AnimationNavbar;
