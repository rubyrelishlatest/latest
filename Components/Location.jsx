import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const About = () => {
  const textRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Temporarily remove scroll logic for testing
    // let scrollTimeout;
    // const handleScroll = () => { ... }
    // window.addEventListener('scroll', handleScroll);
    // return () => { window.removeEventListener('scroll', handleScroll); }
  }, []);

  return (
    <div className="relative h-[500px] flex items-center justify-center text-white font-alegreya overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 about-bg z-0 bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
  
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center p-4 h-full">
        <div className="max-w-md text-center p-6">
          <h1 className="text-4xl font-bold mb-4">WHERE WE ARE</h1>
          <p ref={textRef} className="text-lg mb-6">
          Tomahawk
Reem Island - Al Reem Island - Najmat
Abu Dhabi
United Arab Emirates  </p>
        
        </div>
  
        <div className="mt-6 md:mt-0 md:ml-6">
          <Link href="https://maps.app.goo.gl/EojSTVDDRtyw5nJL6" target="_blank" rel="noopener noreferrer">
          <img
            src="/about.png"
            alt="About Us"
            className="zoomsec w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          </Link>
        </div>
      </div>
    </div>
  );
  
  
};

export default About;
