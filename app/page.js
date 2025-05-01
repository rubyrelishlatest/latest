// app/page.jsx or wherever your Home component is
"use client";

import React, { useEffect, useState, useRef } from 'react';
import Footer from "@/Components/Footer";
import Location from "@/Components/Location";
import About from "@/Components/About";
import Product from "@/Components/Product";
import ImageSlider from "@/Components/ImageSlider";
import Navbar from "@/Components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300; // Show navbar after 300px scroll
      setShowNavbar(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ToastContainer theme="dark" />
      <Navbar show={showNavbar} />
      <ImageSlider />
      <About />
      <Product />
      <Location />
      <Footer />
    </>
  );
}
