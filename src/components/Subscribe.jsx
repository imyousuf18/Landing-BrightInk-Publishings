import React from "react";

export default function Subscribe() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-15 flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text">
          SUBSCRIBE NEWSLETTER
        </h2>

        <p className="text-gray-600 mt-2">
          Get All The Latest Information On Events, Sales And Offers.
        </p>
      </div>

      {/* Right Input Section */}
      <div className="flex items-center bg-black rounded-full p-1 w-full md:w-[420px]">

        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="flex-1 bg-transparent text-white px-5 py-3 outline-none"
        />

        <button
          className="px-6 py-3 rounded-full text-white font-semibold
          background to-orange-600"
        >
          Subscribe
        </button>

      </div>

    </div>
  );
}