"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full hook shadow-md">
      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">

        <div>
          <img
            src="/asset/images/logoo.png"
            alt="logo"
            className="w-25"
          />
        </div>

        <div className="hidden md:flex space-x-8 font-medium text-white">

          <Link href="/" className="hover:text-[#F2BE4B]">
            Home
          </Link>

          <Link href="#about" className="hover:text-[#F2BE4B]">
            About Us
          </Link>

          <Link href="#services" className="hover:text-[#F2BE4B]">
            Services
          </Link>

          <Link href="#contact" className="hover:text-[#F2BE4B]">
            Contact Us
          </Link>

        </div>

        <div className="hidden md:block">
          <Link href="tel:+14067977989" className="background text-white px-5 py-2 rounded-full inline-block transition text-center">
            Get A Quote
          </Link>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </button>
        </div>

      </div>

      {menuOpen && (

        <div className="md:hidden px-6 pb-4 text-white space-y-4 font-medium">

          <Link href="/" className="block">
            Home
          </Link>

          <Link href="/about" className="block">
            About Us
          </Link>

          <Link href="/services" className="block">
            Services
          </Link>

          <Link href="/contact" className="block">
            Contact Us
          </Link>

          <Link href="tel:+14067977989" className="w-full bg-[#F2BE4B] text-white py-2 rounded-lg block text-center">
            Get a Quote
          </Link>

        </div>

      )}

    </nav>
  );
}