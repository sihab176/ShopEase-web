"use client";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import Link from "next/link";
import ProfileNav from "./ProfileNav";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const session = true;

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/shopping-bag.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-800">ShopEase</span>
        </Link>

        {/* Navigation Links */}
        <ul className="md:flex hidden gap-8 items-center ">
          <li>
            <Link
              href="/"
              className={`font-semibold transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`font-semibold transition-colors hover:text-primary ${
                pathname === "/menu" ? "text-primary" : "text-gray-700"
              }`}
            >
              All Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`font-semibold transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </li>
          {session && (
            <li>
              <Link
                href="/dashboard"
                className={`font-semibold transition-colors hover:text-primary ${
                  pathname === "/dashboard" ? "text-primary" : "text-gray-700"
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
            <ProfileNav /> // 👈 avatar + dropdown here
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold transition-colors hover:bg-primary-dark"
            >
              Login
            </Link>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
