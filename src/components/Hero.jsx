"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    let { name, value } = e.target;
    // Strip any character that isn't a valid phone character
    if (name === "phone") {
      value = value.replace(/[^0-9+\-\s()]/g, "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Message Sent!</p>
              <p className="text-gray-400 text-sm text-center">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-yellow-400 underline text-sm cursor-pointer hover:text-yellow-300 transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form id="form" className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full bg-transparent border  border-gray-600 rounded-md  px-4 py-2 text-white"
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="email"
                required
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                autoComplete="tel"
                inputMode="tel"
                maxLength={20}
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-2 text-white"
              ></textarea>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gray-700 hover:bg-amber-800 text-white py-3 rounded-full disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed transition"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
