"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-[#3A0CA3] w-full">
      <div className="max-w-7xl mx-auto min-h-[40px] text-[13px] text-white 
                      flex flex-col sm:flex-row items-center justify-between 
                      px-4 md:px-8 lg:px-12 py-2">

        {/* Left - Address */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <FaMapMarkerAlt className="w-3 h-4 text-white shrink-0" />
          <span className="text-[13.3px] leading-[22px] font-normal text-white">
            Rezilla, 18 Grattan St, Brooklyn
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-2 sm:mt-0">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="w-4 h-4 text-white shrink-0" />
            <span className="text-[13.3px] leading-[22px] font-normal text-white">
              +1 (234) 567-890
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="w-4 h-3 text-white shrink-0" />
            <span className="text-[13.3px] leading-[22px] font-normal text-white">
              info@realestate.com
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}