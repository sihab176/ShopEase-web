"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdDashboard, MdLibraryAdd } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbStars } from "react-icons/tb";


export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname= usePathname()

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      
      {/* Sidebar for large screens */}
      <aside className="hidden  lg:flex lg:flex-col w-64 bg-[#160229] shadow-lg text-white">
        <Link href="/" className="flex  items-center space-x-2 pl-11 py-11 bg-[#a4c3b2]">
          <Image
            src="/shopping-bag.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-black ">ShopEase</span>
        </Link>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
           <span><MdDashboard size={22}/></span> Dashboard
          </Link>
          <Link
            href="/dashboard/add_by_seller"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/add_by_seller' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><MdLibraryAdd size={22}/>
             </span> Add Product
          </Link>
          <Link
            href="/dashboard/allproduct_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/allproduct_manager' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><TbListDetails size={22}/>
             </span> Product manager
          </Link>
          <Link
            href="/dashboard/all_payment_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/all_payment_manager' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><FaMoneyCheckDollar  size={22}/>
             </span> All Payment
          </Link>
          <Link
            href="/dashboard/all_users"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/all_users' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><FaUsers   size={22}/>
             </span> All Users
          </Link>
          {/* <Link
            href="/dashboard/order_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/order_manager' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><MdOutlinePendingActions   size={22}/>
             </span> Order Manager
          </Link> */}
          <Link
            href="/dashboard/customer_reviews"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/customer_reviews' ? 'border-r-4 md:border-r-[6px] bg-[#302823] border-orange-500/90' : ''}`}
          >
            <span><TbStars    size={22}/>
             </span> Customer Reviews
          </Link>

        </nav>
      </aside>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black/20 bg-opacity-40 z-40 lg:hidden transition-opacity  ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-2xl font-bold border-b flex justify-between items-center">
          <Link href="/">
        <div className="p-2 text-2xl font-bold flex items-center gap-2">
          <Image
            src="/shopping-bag.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold ">ShopEase</span>
          </div>
        </Link>
          <button onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        {/* mobile side bar */}
       <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
           <span><MdDashboard size={22}/></span> Dashboard
          </Link>
          <Link
            href="/dashboard/add_by_seller"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/add_by_seller' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
            <span><MdLibraryAdd size={22}/>
             </span> Add Product
          </Link>
          <Link
            href="/dashboard/allproduct_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/allproduct_manager' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
            <span><TbListDetails size={22}/>
             </span> Product manager
          </Link>
          <Link
            href="/dashboard/all_payment_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/all_payment_manager' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
            <span><FaMoneyCheckDollar  size={22}/>
             </span> All Payment
          </Link>
          <Link
            href="/dashboard/all_users"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/all_users' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
            <span><FaUsers   size={22}/>
             </span> All Users
          </Link>
          <Link
            href="/dashboard/customer_reviews"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/customer_reviews' ? 'border-r-4 md:border-r-[6px] bg-[#487550] border-orange-500/90' : ''}`}
          >
            <span><TbStars    size={22}/>
             </span> Customer Reviews
          </Link>

        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children} 
        </main>
      </div>
    </div>
  );
}