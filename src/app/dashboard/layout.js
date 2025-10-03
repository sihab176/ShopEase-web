"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdDashboard, MdLibraryAdd } from "react-icons/md";
export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname= usePathname()

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      
      {/* Sidebar for large screens */}
      <aside className="hidden md:flex md:flex-col w-64 bg-[#042a2b] shadow-lg text-white">
        <Link href="/" className="flex  items-center space-x-2 pl-11 py-11 bg-[#0b5255]">
          <Image
            src="/shopping-bag.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold ">ShopEase</span>
        </Link>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard' ? 'border-r-4 md:border-r-[6px] bg-[#036666] border-orange-500/90' : ''}`}
          >
           <span><MdDashboard size={22}/></span> Dashboard
          </Link>
          <Link
            href="/dashboard/add_by_seller"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/add_by_seller' ? 'border-r-4 md:border-r-[6px] bg-[#036666] border-orange-500/90' : ''}`}
          >
            <span><MdLibraryAdd size={22}/>
             </span> Add Product
          </Link>
          <Link
            href="/dashboard/allproduct_manager"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/allproduct_manager' ? 'border-r-4 md:border-r-[6px] bg-[#036666] border-orange-500/90' : ''}`}
          >
            <span><MdLibraryAdd size={22}/>
             </span> Product manager
          </Link>

        </nav>
      </aside>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black/20 bg-opacity-40 z-40 md:hidden transition-opacity  ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform md:hidden ${
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
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard' ? 'border-r-4 md:border-r-[6px] bg-[#036666] border-orange-500/90' : ''}`}
          >
           <span><MdDashboard size={22}/></span> Dashboard
          </Link>
          <Link
            href="/dashboard/add_by_seller"
            className={` p-2 rounded hover:bg-[#125252] flex items-center gap-2 ${pathname === '/dashboard/add_by_seller' ? 'border-r-4 md:border-r-[6px] bg-[#036666] border-orange-500/90' : ''}`}
          >
            <span><MdLibraryAdd size={22}/>
             </span> Add Product
          </Link>

        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* <span>User Name</span> */}
            {/* <img
              src="https://via.placeholder.com/32"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            /> */}
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