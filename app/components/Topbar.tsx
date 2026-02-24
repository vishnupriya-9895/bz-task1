"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden sm:block w-full bg-[#3A0CA3]">
      <div className="w-full max-w-full mx-auto min-h-[40px] text-[13px] text-white 
                      flex flex-col sm:flex-row items-center justify-between 
                      px-4 md:px-8 lg:px-12 xl:px-16 py-2">

        {/* Left - Address */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 justify-center sm:justify-start w-full sm:w-auto">
          <FaMapMarkerAlt className="w-3 h-4 text-white shrink-0" />
          <span className="text-[13.3px] leading-[22px] font-normal text-white break-all text-center sm:text-left">
            Rezilla, 18 Grattan St, Brooklyn
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-6 mt-2 sm:mt-0 min-w-0 justify-center sm:justify-end w-full sm:w-auto">

          {/* Phone */}
          <div className="flex items-center gap-2 min-w-0 justify-center sm:justify-start">
            <FaPhoneAlt className="w-4 h-4 text-white shrink-0" />
            <span className="text-[13.3px] leading-[22px] font-normal text-white break-all text-center sm:text-left">
              +1 (234) 567-890
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 min-w-0 justify-center sm:justify-start">
            <FaEnvelope className="w-4 h-3 text-white shrink-0" />
            <span className="text-[13.3px] leading-[22px] font-normal text-white break-all text-center sm:text-left">
              info@realestate.com
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}