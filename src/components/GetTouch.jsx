"use client";

import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-10 ">
      <div id="ContactUs" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="   rounded-2xl ">
            <h1 className="pb-6 text-4xl">
                Get In Touch
            </h1>
          <form className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg bg-black text-white  px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
              />
            </div>

              <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg bg-black text-white  px-4 py-3 outline-none focus:border-yellow-500"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
            <img src="/asset/images/gettouch.png" alt="" />
        </div>
      </div>
    </section>
  );
}