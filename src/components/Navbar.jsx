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
          <Link href="tel:+14067977989" className="bg-gradient-to-r from-[#F5BC24] to-[#AF530E] text-white px-5 py-2 rounded-full transition flex flex-row items-center gap-2 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.91.91a16.001 16.001 0 006.586 6.586l.91-.91a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
            (406) 797-7989
          </Link>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>

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

          <Link href="#about" className="block">
            About Us
          </Link>

          <Link href="#services" className="block">
            Services
          </Link>

          <Link href="#contact" className="block">
            Contact Us
          </Link>

          <Link href="tel:+14067977989" className="w-full bg-gradient-to-r from-[#F5BC24] to-[#AF530E] text-white py-2 rounded-lg flex flex-row items-center justify-center gap-2 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.91.91a16.001 16.001 0 006.586 6.586l.91-.91a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
            (406) 797-7989
          </Link>

        </div>

      )}

    </nav>
  );
}