import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Page = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
       <div className="flex-1">
  <p className="text-blue-600 uppercase tracking-wider text-sm">
    TESTIMONIALS
  </p>

  <h1 className="text-4xl font-bold mt-4">
    Look What Our <br /> Customers Say!
  </h1>

  <p className="text-gray-600 mt-6 max-w-md">
    Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
  </p>

  {/* Arrow Buttons */}
  <div className="flex gap-[50px] mt-8">

    
    <div className="w-[50px] h-[50px] bg-white border-2 border-[#4361EE] rounded-full flex items-center justify-center rotate-180">
      <FaArrowRight className="text-[#4361EE]" />
    </div>

    
    <div className="w-[50px] h-[50px] bg-white border-2 border-[#4361EE] rounded-full flex items-center justify-center">
      <FaArrowRight className="text-[#4361EE]" />
    </div>

  </div>
</div>
        {/* RIGHT SIDE CARD */}
<div className="flex-1 relative">

  {/* Gradient Circle (Top Left) */}
  <div className="absolute -top-8 -left-8 w-[60px] h-[60px] opacity-50 rotate-[30deg] bg-gradient-to-b from-[#4361EE] to-transparent rounded-full z-0"></div>

  
 


  <div className="bg-white p-8 rounded-2xl shadow-xl w-[500px] h-[358px] relative z-10">

    <p className="text-gray-700 leading-relaxed">
      I highly recommend Jodi J. Appleby. She was attentive to our needs 
      and worked tirelessly to find us the perfect home. We couldn't 
      be happier with our new place!
    </p>

    <hr className="my-6 border-gray-300" />

    <div className="flex items-center gap-4">

      <img
        src="./review.jpg"
        alt=""
        className="w-14 h-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold">
          Barbara D. Smith
        </h3>

        <div className="flex gap-1 mt-1">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-300" />
        </div>
      </div>

    </div>

  </div>


  <div className="flex gap-3 mt-6 ml-6">
    <div className="w-16 h-1 bg-gray-400 rounded"></div>
    <div className="w-16 h-1 bg-gray-200 rounded"></div>
    <div className="w-16 h-1 bg-gray-200 rounded"></div>
  </div>

</div>
      </div>
     


  <div className="py-20 flex justify-center px-6">
  <div className="relative w-full max-w-[1200px] bg-[#3A0CA3] rounded-[40px] flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16 py-10 md:py-0 gap-6">

    {/* Man Image */}
    <div className="order-3 md:order-1 md:mr-auto">
      <img
        src="./last.png"
        alt=""
        className="w-[358px] h-[303px] object-contain"
      />
    </div>

    {/* Middle Content */}
    <div className="text-white max-w-lg order-1 md:order-2 text-center md:text-left">
      <h2 className="text-3xl font-bold">
        Become a Agent.
      </h2>
      <p className="mt-4 text-blue-100">
        Fusce venenatis tellus a felis scelerisque. 
        Venenatis tellus a felis scelerisque.
      </p>
    </div>

    {/* Right Button */}
    <div className="order-2 md:order-3">
      <button className="w-[165px] h-[49px] border border-white rounded-[30px] text-black px-[30px] py-[19px] bg-white flex items-center justify-center transition">
        Register Now
      </button>
    </div>

    {/* Gradient Circle Near Man (Right Side of Image) */}
    <div className="absolute left-[386px] top-[105px] w-[100px] h-[100px] opacity-50 rotate-[60deg] bg-gradient-to-b from-white to-transparent rounded-full"></div>

    {/* Top Right Outside Gradient Circle */}
    <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] opacity-50 -rotate-[30deg] bg-gradient-to-b from-white to-transparent rounded-full"></div>

  </div>
</div>

    </div>
  );
};

export default Page;