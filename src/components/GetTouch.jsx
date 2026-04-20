"use client";

import React, { useState } from "react";

export default function ContactUs() {
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
    <section id="contact" className="py-10 ">
      <div id="ContactUs" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="   rounded-2xl ">
            <h1 className="pb-6 text-4xl">
                Get In Touch
            </h1>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg">Message Sent!</p>
              <p className="text-gray-400 text-sm text-center">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-yellow-500 underline text-sm cursor-pointer hover:text-yellow-400 transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-black text-white  px-4 py-3 outline-none focus:border-yellow-500"
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
                />
              </div>

                <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                  className="w-full border border-gray-300 rounded-lg bg-black text-white  px-4 py-3 outline-none focus:border-yellow-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={20}
                  className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
                />
              </div>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 bg-black text-white  rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
              ></textarea>

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
        <div>
            <img src="/asset/images/gettouch.png" alt="" />
        </div>
      </div>
    </section>
  );
}