import React from 'react'
import { MdOutlineHexagon } from "react-icons/md";
import { TbUserHexagon } from "react-icons/tb";

const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center text-center lg:text-left">

        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start">
          
          <p className="text-sm text-blue-600 uppercase tracking-wider mb-4">
            Who are we
          </p>

          <h1 className="font-bold text-3xl sm:text-4xl leading-tight mb-6 max-w-[600px]">
            Assisting individuals in locating the appropriate real estate.
          </h1>

          <p className="text-gray-600 mb-8 max-w-[600px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
            Nulla convallis ipsum molestie nibh malesuada.
          </p>

          {/* Feature 1 */}
          <div className="w-full max-w-[400px] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 mb-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <MdOutlineHexagon className="text-blue-600 text-4xl flex-shrink-0" />
            <div>
              <h1 className="text-blue-600 font-semibold mb-1">
                Donec porttitor euismod
              </h1>
              <p className="text-gray-600 text-sm">
                Nullam a lacinia ipsum, nec dignissim purus.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full max-w-[400px] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
            <TbUserHexagon className="text-blue-600 text-4xl flex-shrink-0" />
            <div>
              <h1 className="text-blue-600 font-semibold mb-1">
                Donec porttitor euismod
              </h1>
              <p className="text-gray-600 text-sm">
                Nullam a lacinia ipsum, nec dignissim purus.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[600px]">

            {/* about1 image */}
            <div className="relative">
              <img 
                className="w-full h-64 sm:h-[400px] md:h-[500px] object-cover rounded-xl shadow-md" 
                src="./about1.jpg" 
                alt="" 
              />
            </div>

            {/* Right stacked images */}
            <div className="flex flex-col gap-6">
              <img 
                className="w-full h-48 sm:h-[220px] md:h-[280px] object-cover rounded-xl shadow-md" 
                src="./about2.jpg" 
                alt="" 
              />
              <img 
                className="w-full h-40 sm:h-[160px] md:h-[180px] object-cover rounded-xl shadow-md" 
                src="./abou3.jpg" 
                alt="" 
              />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default page;