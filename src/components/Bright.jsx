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
        <button className="rounded-full p-3 px-5 background text-white">sign up & claim your discount</button>
      </div>
    </div>
  );
}
