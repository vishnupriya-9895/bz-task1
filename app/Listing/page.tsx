import React from 'react'
import { FaFire, FaBed, FaBath, FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const page = () => {
  return (
    <>
   
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-blue-500 font-semibold mb-3 text-center md:text-center lg:text-left">
          CHECKOUT OUR NEW
        </h1>

        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center gap-6 text-center lg:text-left">

          {/* Left Side */}
          <div className="mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold mb-2">
              Latest Listed Properties
            </h1>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap sm:flex-nowrap">

            <button className="px-6 py-2 rounded-full border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
              All
            </button>

            <button className="px-6 py-2 rounded-full bg-[#3A0CA3] text-white hover:bg-blue-700 transition">
              Sell
            </button>

            <button className="px-6 py-2 rounded-full border border-gray-300 bg-white hover:bg-blue-600 hover:text-white transition">
              Rent
            </button>

          </div>

        </div>
      </div>
    </div>

    {/* Cards Section */}
    <div className="max-w-7xl mx-auto px-6 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Card 1 */}
        <div className="rounded-xl overflow-hidden">
          <div className="relative">
            <img src="./list1.jpg" alt="" className="w-full h-[250px] object-cover rounded-xl" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">
              <FaFire className="text-lg" />
              <span>Popular</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-center lg:text-left">
            <h2 className="text-blue-600 font-bold text-lg">$ 5,970</h2>
            <h3 className="font-semibold mt-1">Tranquil Haven in the Woods</h3>
            <p className="text-gray-500 text-sm mt-1">103 Wright Court Burien, WA 98168</p>
            <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-3">
              <span className="flex items-center gap-2"><FaBed />4 Beds</span>
              <span className="flex items-center gap-2"><FaBath />3 Bath</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl overflow-hidden">
          <div className="relative">
            <img src="./list2.jpg" alt="" className="w-full h-[250px] object-cover rounded-xl" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-blue-300 text-white px-3 py-1 rounded-full text-sm font-medium">
              <FaHome className="text-lg" />
              <span>new listing</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-center lg:text-left">
            <h2 className="text-blue-600 font-bold text-lg">$ 1,970</h2>
            <h3 className="font-semibold mt-1">Serene Retreat by the Lake</h3>
            <p className="text-gray-500 text-sm mt-1">1964 Jehovah Drive, VA 22408</p>
            <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-3">
              <span className="flex items-center gap-2"><FaBed />3 Beds</span>
              <span className="flex items-center gap-2"><FaBath />2 Bath</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl overflow-hidden">
          <div className="relative">
            <img src="./list3.jpg" alt="" className="w-full h-[250px] object-cover rounded-xl" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-green-200 text-white px-3 py-1 rounded-full text-sm font-medium">
              <FaDollarSign className="text-lg" />
              <span>discount price</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-center lg:text-left">
            <h2 className="text-blue-600 font-bold text-lg">$ 3,450</h2>
            <h3 className="font-semibold mt-1">Charming Cottage in the Meadow</h3>
            <p className="text-gray-500 text-sm mt-1">1508 Centennial Farm Road Harlan, 51537</p>
            <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-3">
              <span className="flex items-center gap-2"><FaBed />4 Beds</span>
              <span className="flex items-center gap-2"><FaBath />3 Bath</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl overflow-hidden">
          <div className="relative">
            <img src="./list4.jpg" alt="" className="w-full h-[250px] object-cover rounded-xl" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">
              <FaFire className="text-lg" />
              <span>Popular</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-center lg:text-left">
            <h2 className="text-blue-600 font-bold text-lg">$ 2,340</h2>
            <h3 className="font-semibold mt-1">Grand Estate on the Hilltop</h3>
            <p className="text-gray-500 text-sm mt-1">103 Wright Court Burien, WA 98168</p>
            <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600 mt-3">
              <span className="flex items-center gap-2"><FaBed />4 Beds</span>
              <span className="flex items-center gap-2"><FaBath />3 Bath</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default page