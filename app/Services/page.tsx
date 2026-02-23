import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBed } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="bg-gray-200 py-20 mt-30 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-blue-600 uppercase tracking-wider text-sm">
              Our Services
            </p>
            <h1 className="text-3xl font-bold mt-3">
              Donec porttitor euismod dignissim
            </h1>
          </div>

          {/* Cards */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[340px] h-[362px] flex flex-col justify-center items-center text-center">
              <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                <FaSearch className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Buy a Home</h3>
              <p className="text-gray-600 text-sm">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[340px] h-[362px] flex flex-col justify-center items-center text-center">
              <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                <IoMdHome className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Sell a House</h3>
              <p className="text-gray-600 text-sm">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg w-[340px] h-[362px] flex flex-col justify-center items-center text-center">
              <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-xl mb-6">
                <FaBed className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Rent a Home</h3>
              <p className="text-gray-600 text-sm">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AREAS SECTION */}
      <div className="mt-30 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-blue-300 rounded-full opacity-50 rotate-[-30deg]"></div>

        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 uppercase tracking-wider text-sm">
            AREAS ACROSS THE TOWN
          </p>

          <h1 className="text-3xl font-bold mt-3 mb-10">
            Neighborhood Properties
          </h1>

          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative">
              <img
                className="w-full h-[320px] object-cover rounded-[30px]"
                src="./ser1.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg">
                <p className="text-3xl font-semibold text-gray-50">216</p>
                <p className="text-xl text-gray-50">New York City, NY</p>
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full h-[320px] object-cover rounded-[30px]"
                src="./ser2.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg">
                <p className="text-3xl font-semibold text-gray-50">216</p>
                <p className="text-xl text-gray-50">New York City, NY</p>
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full h-[320px] object-cover rounded-[30px]"
                src="./ser3.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg">
                <p className="text-3xl font-semibold text-gray-50">216</p>
                <p className="text-xl text-gray-50">New York City, NY</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-10">
            <div className="relative">
              <img
                className="w-full h-[320px] object-cover rounded-[30px]"
                src="./ser5.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg">
                <p className="text-3xl font-semibold text-gray-50">216</p>
                <p className="text-xl text-gray-50">New York City, NY</p>
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full h-[320px] object-cover rounded-[30px]"
                src="./ser4.jpg"
                alt=""
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-lg">
                <p className="text-3xl font-semibold text-gray-50">216</p>
                <p className="text-xl text-gray-50">New York City, NY</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-blue-500 rounded-full rotate-[30deg] opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;