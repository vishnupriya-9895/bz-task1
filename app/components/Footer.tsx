import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgba(67, 97, 238, 1)] text-black mt-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <div className="w-[50px] h-[50px] bg-[#3A0CA3] rounded-full flex items-center justify-center">
            <FaHome className="w-[24px] h-[24px] text-white bg-[#3A0CA3] rounded-full" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-4">Rezilla</h2>
          <p className="text-sm leading-6">
            2728 Hickory Street<br />
            Salt Lake City, UT 84104
          </p>
          <p className="mt-4 text-sm">+1 206-214-2298</p>
          <p className="text-sm">support@rezilla.com</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-black font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Listings</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Become a Agent</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-black font-semibold mb-4">Discovery</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Canada</li>
            <li className="hover:text-white cursor-pointer">United States</li>
            <li className="hover:text-white cursor-pointer">Germany</li>
            <li className="hover:text-white cursor-pointer">Africa</li>
            <li className="hover:text-white cursor-pointer">India</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-black font-semibold mb-4">
            Subscribe to our Newsletter!
          </h3>

          <div className="flex flex-col sm:flex-row mb-4 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-l-lg bg-white text-black outline-none"
            />
            <button className="w-full sm:w-auto px-4 py-2 rounded-r-lg text-white bg-[#3A0CA3]">
              Subscribe
            </button>
          </div>

          <p className="text-sm mt-4">Follow Us on</p>
          <div className="flex gap-5">
            <CiLinkedin className="text-[#3A0CA3] text-4xl" />
            <CiFacebook className="text-[#3A0CA3] text-4xl" />
            <FaInstagram className="text-[#3A0CA3] text-4xl" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="hidden lg:flex bg-black text-white text-sm py-4 justify-around">
        © 2026 Rezilla. All rights reserved.
        <p>terms and condition</p>
        <p>privacy policy</p>
        <p>Disclaimer</p>
      </div>

    </footer>
  );
};

export default Footer;