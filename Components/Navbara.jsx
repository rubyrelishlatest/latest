"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbara = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo2.jpg"
                alt="Logo"
                width={100}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="hover:text-yellow-500 text-black font-bold">
              HOME
            </Link>
            <Link href="/Aboutus" className="hover:text-yellow-500 text-black">
              ABOUT US
            </Link>
            <Link href="/Contact" className="hover:text-yellow-500 text-black">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden w-full transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          } bg-[#d3ad3c] rounded-lg mt-2 px-4 py-3`}
        >
          <Link
            href="/"
            className="block text-black hover:text-yellow-500 font-bold"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/Aboutus"
            className="block text-black hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/Contact"
            className="block text-black hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbara;
