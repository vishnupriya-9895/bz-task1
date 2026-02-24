import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase tracking-wider text-sm">
            Introduce yourself to
          </p>
          <h1 className="text-3xl font-bold mt-3">
            Our Team of Experts
          </h1>
        </div>

        {/* Team Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

          {/* Card 1 */}
          <div className="text-center">
            <img
              className="w-[200px] h-[280px] object-cover rounded-tl-[120px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]"
              src="./blog1.jpg"
              alt=""
            />
            <h3 className="mt-4 font-semibold">Brendon M</h3>
            <p className="text-gray-500 text-sm">CEO & Founder</p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img
              className="w-[200px] h-[280px] object-cover rounded-tl-[120px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]"
              src="./blog2.jpg"
              alt=""
            />
            <h3 className="mt-4 font-semibold">Jodi J. Appleby</h3>
            <p className="text-gray-500 text-sm">Real Estate Developer</p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img
              className="w-[200px] h-[280px] object-cover rounded-tl-[120px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]"
              src="./blog3.jpg"
              alt=""
            />
            <h3 className="mt-4 font-semibold">Susan T. Smith</h3>
            <p className="text-gray-500 text-sm">Buyer's Agent</p>
          </div>

          {/* Card 4 */}
          <div className="text-center">
            <img
              className="w-[200px] h-[280px] object-cover rounded-tl-[120px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px]"
              src="./blog4.jpg"
              alt=""
            />
            <h3 className="mt-4 font-semibold">Justin S. Meza</h3>
            <p className="text-gray-500 text-sm">Listing Agent</p>
          </div>

        </div>
      </div>

     <div className="bg-[#3A0CA3] py-20 w-full">
      <div className="w-full px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-200 uppercase tracking-wider text-sm">
            WHAT’S TRENDING
          </p>
          <h1 className="text-3xl font-bold text-white mt-3">
            Latest Blogs & Posts
          </h1>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div>
            <img
              src="./bl.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <h2 className="text-white font-semibold text-lg mt-6">
              Top 10 Home Buying Mistakes to Avoid
            </h2>
            <p className="text-blue-100 mt-3 text-sm">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="./bl3.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <h2 className="text-white font-semibold text-lg mt-6">
              How to Stage Your Home for a Quick Sale
            </h2>
            <p className="text-blue-100 mt-3 text-sm">
              Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src="./bll2.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-xl"
            />
            <h2 className="text-white font-semibold text-lg mt-6">
              5 Tips for First-Time Home Sellers
            </h2>
            <p className="text-blue-100 mt-3 text-sm">
              In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.
            </p>
          </div>
        </div>

        {/* Small Screen Button */}
        <div className="sm:hidden flex justify-center mt-10">
          <button className="w-[195px] h-[49px] bg-white border border-[#3A0CA3] rounded-[30px] text-[#3A0CA3] font-semibold 
                             flex items-center justify-center px-[30px] py-[19px] gap-[10px]">
            View More Blog
          </button>
        </div>

      </div>

      {/* Arrows - visible on medium+ screens */}
      <div className="hidden sm:flex justify-between items-center w-full px-6 mt-10">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <FaArrowRight className="text-[#3A0CA3]" />
        </div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <FaArrowRight className="text-[#3A0CA3]" />
        </div>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <FaArrowRight className="text-[#3A0CA3]" />
        </div>
      </div>

      {/* Lines */}
      <div className="flex justify-center gap-3 mt-10">
        <div className="w-20 h-1 bg-white rounded"></div>
        <div className="w-20 h-1 bg-white rounded"></div>
        <div className="w-20 h-1 bg-white rounded"></div>
      </div>

    </div>
    </>
  );
};

export default Page;