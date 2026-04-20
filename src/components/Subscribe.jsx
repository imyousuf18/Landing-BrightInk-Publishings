"use client";

import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
      {status === "success" ? (
        <div className="flex items-center gap-3 bg-black rounded-full px-6 py-4 w-full md:w-[420px]">
          <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-white text-sm">You&apos;re subscribed! Thank you.</span>
          <button
            onClick={() => setStatus("idle")}
            className="ml-auto text-gray-400 hover:text-white text-xs underline cursor-pointer transition"
          >
            Done
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-black rounded-full p-1 w-full md:w-[420px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={status === "error" ? "Something went wrong — try again" : "Enter Your Email Address"}
            autoComplete="email"
            required
            className={`flex-1 bg-transparent px-5 py-3 outline-none text-sm ${
              status === "error" ? "text-red-400 placeholder:text-red-400" : "text-white"
            }`}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full text-white font-semibold background to-orange-600 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}

    </div>
  );
}