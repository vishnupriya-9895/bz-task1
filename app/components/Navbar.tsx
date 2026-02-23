"use client";
import { useState } from "react";
import { FaHome, FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[80px] flex justify-center bg-white relative">

      <div className="w-full max-w-[1400px] text-[#2B2B2B] flex justify-between items-center px-4 sm:px-8 lg:px-[100px] relative">

        {/* LEFT MENU (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            href="/"
            className="w-[80px] px-[16px] py-[13px] rounded-[30px] bg-[#4361EE4D] text-[#4361EE] text-[16px] font-medium flex items-center justify-center"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="w-[81px] px-[16px] py-[13px] rounded-[30px] text-[16px] font-medium text-black hover:bg-[#4361EE]/30 hover:text-[#4361EE] transition-all duration-300"
          >
            About
          </Link>

          <Link
            href="/listings"
            className="w-[92px] px-[16px] py-[13px] rounded-[30px] text-[16px] font-medium text-black hover:bg-[#4361EE]/30 hover:text-[#4361EE] transition-all duration-300"
          >
            Listings
          </Link>

          <Link
            href="/services"
            className="w-[100px] px-[16px] py-[13px] rounded-[30px] text-[16px] font-medium text-black hover:bg-[#4361EE]/30 hover:text-[#4361EE] transition-all duration-300"
          >
            Services
          </Link>

          <Link
            href="/blogs"
            className="w-[76px] px-[16px] py-[13px] rounded-[30px] text-[16px] font-medium text-black hover:bg-[#4361EE]/30 hover:text-[#4361EE] transition-all duration-300"
          >
            Blogs
          </Link>

        </div>

        {/* LOGO (Center stays same) */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[50px] h-[50px] bg-[#3A0CA3] rounded-full flex items-center justify-center">
            <FaHome className="w-[24px] h-[24px] text-white" />
          </div>

          <span className="text-[20px] font-semibold leading-none text-black">
            Rezilla
          </span>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex items-center gap-[10px]">
            <FaRegUserCircle className="w-[18px] h-[18px]" />
            <span className="text-[16px] font-medium whitespace-nowrap">
              Login/Register
            </span>
          </div>

          <button className="w-[169px] px-[26px] py-[15px] bg-[#3A0CA3] rounded-[50px] flex items-center gap-[10px] text-white">
            <TbHomePlus className="w-[20px] h-[20px]" />
            <span className="text-[16px] font-medium whitespace-nowrap">
              Add Listing
            </span>
          </button>

        </div>

        {/* HAMBURGER (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 lg:hidden z-50">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>

          <div className="flex items-center gap-2">
            <FaRegUserCircle />
            <span>Login/Register</span>
          </div>

          <button className="px-6 py-3 bg-[#3A0CA3] rounded-full flex items-center gap-2 text-white">
            <TbHomePlus />
            Add Listing
          </button>

        </div>
      )}
    </div>
  );
}