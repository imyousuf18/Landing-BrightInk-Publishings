"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative  w-full min-h-screen flex items-center">
      <Image
        src="/asset/images/bannerimage.png"
        alt="banner"
        fill
        className="object-cover "
      />

      <div className="absolute inset-0  bg-black/60"></div>

      <div className="relative   max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-15  items-center">
        <div className="text-white space-y-6">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl DomaineDispNar-Black text md:text-5xl font-bold leading-tight">
              Unlock Powerful Ideas That Will Change The Way You Think.
            </h1>

            <img
              src="/asset/images/last.png"
              alt="icon"
              className="w-12 md:w-16 md:pb-25"
            />
          </div>

          <p className="text-gray-300 max-w-xl">
            Discover insights, strategies, and real-world lessons inside this
            powerful book. Designed to inspire action, improve mindset, and help
            you achieve more in life and business.
          </p>

          <div className="flex items-end gap-10">
            <img
              src="/asset/images/freed.png"
              alt="book"
              className="w-20 md:w-40"
            />

            <img
              src="/asset/images/leading.png"
              alt="book"
              className="w-20 md:w-40"
            />
          </div>

          <div className="flex gap-4">
           <a href="tel:+14067977989" className="background text-white px-6 py-3 rounded-full font-semibold">
    Call Now
  </a>

            
  <a href="mailto:info@brightinkpublishings.com" className="background text-white px-6 py-3 rounded-full font-semibold">
    Get In Touch
  </a>
          </div>
        </div>
        <div className="bg-black/70 backdrop-blur-md border border-yellow-500 p-8 rounded-2xl shadow-[0_0_40px_rgba(255,200,0,0.6)] ">
          <h2 className="text-white text-xl font-semibold mb-6">
            Start Your Bright Ink Publishing Journey
          </h2>

          <form id="form" className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border  border-gray-600 rounded-md  px-4 py-2 text-white"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
            ></textarea>

            <button className="w-full bg-gray-700 hover:bg-amber-800 text-white py-3 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
