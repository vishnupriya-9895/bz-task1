import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuTextSearch } from "react-icons/lu";

const page = () => {
  return (
    <div>
      <div className="w-full min-h-[700px] bg-[url('/back.png')] bg-cover bg-center bg-no-repeat">
        
        {/* Main Section */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pt-[80px] lg:pt-[120px] px-4 sm:px-6 text-center lg:text-left">
          
          {/* LEFT SIDE */}
          <div className="relative text-black flex flex-col items-center lg:items-start">
            
            <span className="uppercase text-[#4361EE] text-[18px] sm:text-[20px] font-medium leading-none tracking-[3px]">
              Real Estate
            </span>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-semibold leading-tight lg:leading-[65px] mt-4 max-w-[580px]">
              Find a perfect home you love..!
            </h1>

            <p className="mt-6 max-w-[580px] text-base leading-[26px] text-[#808080]">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
              Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>

            <div className="relative mt-10 w-full max-w-[580px]">
              <img
                src="/imagehome.jpg"
                alt="home"
                className="w-full rounded-xl shadow-lg"
              />

              <div
                className="absolute w-[60px] h-[60px] rounded-full"
                style={{
                  top: "-30px",
                  right: "-30px",
                  background:
                    "linear-gradient(180deg, rgba(67, 97, 238, 0.6) 0%, rgba(67, 97, 238, 0) 100%)",
                  transform: "rotate(-30deg)",
                }}
              ></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-[20px] shadow-xl p-8 text-left">
              
              <div className="flex gap-6 border-b border-gray-200 mb-8">
                <div className="relative group cursor-pointer pb-3">
                  <p className="font-semibold text-[#3A0CA3]">For Sale</p>
                  <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[#3A0CA3]"></span>
                </div>

                <div className="relative group cursor-pointer pb-3">
                  <p className="text-gray-500 transition-colors duration-300 group-hover:text-[#3A0CA3]">
                    For Rent
                  </p>
                  <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#3A0CA3] group-hover:w-full transition-all duration-300"></span>
                </div>
              </div>

              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="w-full h-[59px] border border-[#D4D4D4] rounded-[20px] px-6 text-[16px] placeholder:text-[#AAAAAA] bg-gray-50 mb-[30px] outline-none"
              />

              <input
                type="text"
                placeholder="Select Property Type"
                className="w-full h-[59px] border border-[#D4D4D4] rounded-[20px] px-6 text-[16px] placeholder:text-[#AAAAAA] bg-gray-50 mb-[30px] outline-none"
              />

              <input
                type="text"
                placeholder="Select Rooms"
                className="w-full h-[59px] border border-[#D4D4D4] rounded-[20px] px-6 text-[16px] placeholder:text-[#AAAAAA] bg-gray-50 mb-[30px] outline-none"
              />

              <p className="flex items-center gap-2 text-[#3A0CA3] text-[13.3px] font-normal leading-[22px] cursor-pointer whitespace-nowrap">
                <LuTextSearch className="w-[14px] h-[14px]" />
                Advance Search
              </p>

              <button className="w-full h-[59px] mb-[60px] mt-[70px] bg-[#3A0CA3] text-white rounded-[30px] flex items-center justify-center gap-2">
                <FaSearch className="w-[20px] h-[20px] text-white" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 px-4 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start w-full max-w-[360px] h-[100px] bg-white rounded-4xl shadow-md px-9">
            <img
              src="/rev.jpg"
              alt="happy customers"
              className="w-[115px] h-[36px] object-cover"
            />
            <div className="ml-4">
              <p className="text-[19.4px] font-medium leading-none text-[#392F5A]">
                72k+ Happy <br /> Customers
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start w-full max-w-[360px] h-[100px] bg-white rounded-4xl shadow-md px-9">
            <div className="w-[60px] h-[60px]">
              <img
                src="/horev.jpg"
                alt="new listings"
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="text-[19.4px] font-medium leading-none text-[#392F5A]">
                200+ New <br /> Listings Everyday!
              </p>
            </div>
          </div>

        </div>
      </div>

      <p className="text-center w-full max-w-[369px] mt-20 mx-auto px-4">
        Trusted by 100+ Companies across the globel!
      </p>

      {/* Logos */}
      <div className="w-full py-10 relative px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./google.png" alt="" />
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./amazon.png" alt="" />
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./log.png" alt="" />
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./sam.png" alt="" />
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./net.png" alt="" />
          <img className="w-[120px] h-[40px] object-contain filter grayscale" src="./spo.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default page;