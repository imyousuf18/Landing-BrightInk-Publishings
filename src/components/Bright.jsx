import React from "react";

export default function Bright() {
  return (
    <div className="flex flex-col md:flex-row justify-center py-15 gap-15 max-w-7xl mx-auto px-6">
      <div className="w-full xl:w-1/2">
        <img src="/asset/images/bright.png" alt="" className="" />
      </div>
      <div className="w-full xl:w-1/2 space-y-6 ">
        <h1 className="text-4xl font-bold">The bright ink Publishing Approach .</h1>
        <p>
          At bright ink Publishing, we recognize that every author’s journey is
          unique. That’s why we offer a flexible, customized publishing process
          tailored to your specific goals—while ensuring you retain full
          creative control at every stage. As a trusted publishing partner, we
          turn your vision into reality with clarity, professionalism, and
          strategic guidance.
        </p>
        <div className="flex flex-row items-center gap-6 mt-4 flex-wrap">
          <a href="#contact" className="bg-gradient-to-r from-[#F5BC24] to-[#AF530E] text-white p-3 px-5 rounded-full inline-block transition flex flex-row items-center gap-2 whitespace-nowrap">
            sign up & claim your discount
          </a>
          <span className="flex flex-row items-center gap-2 px-3 py-2 rounded-full transition duration-200 hover:bg-gradient-to-r hover:from-[#F5BC24] hover:to-[#AF530E] hover:text-white cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.91.91a16.001 16.001 0 006.586 6.586l.91-.91a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
            <a href="tel:+17373205889" className="no-underline">(737) 320-5889</a>
          </span>
        </div>
      </div>
    </div>
  );
}
