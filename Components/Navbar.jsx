"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ show }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo2.jpg"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
          <Link
            href="/"
            className="hover:text-yellow-500 text-black font-bold"
          >
            HOME
          </Link>
          <Link href="/Aboutus" className="hover:text-yellow-500 text-black">
            ABOUT US
          </Link>
          <Link href="/Contact" className="hover:text-yellow-500 text-black">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden flex items-center space-x-2"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white p-4 space-y-4`}
      >
        <Link
          href="/"
          className="block text-black hover:text-yellow-500 font-bold"
          onClick={() => setMobileMenuOpen(false)}
        >
          HOME
        </Link>
        <Link
          href="/Aboutus"
          className="block text-black hover:text-yellow-500"
          onClick={() => setMobileMenuOpen(false)}
        >
          ABOUT US
        </Link>
        <Link
          href="/Contact"
          className="block text-black hover:text-yellow-500"
          onClick={() => setMobileMenuOpen(false)}
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
