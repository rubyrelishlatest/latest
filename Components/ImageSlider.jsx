import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageSlider = () => {
  return (
    <div className="min-h-[80vh] md:min-h-screen flex md:flex-row flex-col text-black bg-white">

      {/* Text Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative">
        {/* Zooming text block */}
        <div className="zoomsec text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">TOMAHAWK CAFFE</h1>
          <p className="mb-4 text-black leading-relaxed">
            The best specialty café on Reem Island, serving premium coffee, fresh pastries, and more. Perfect for meetings, gatherings, or a productive day. Free Wi-Fi & cozy ambiance! 
            <br />
            <strong>Explore the foods</strong>, <strong>Ambiance and Experience</strong>
          </p>
          <Link href="https://g.co/kgs/LCaz6yd">
            <button className="mb-9 border border-[#d3ad3c] black py-2 px-4 rounded hover:bg-[#d3ad3c] hover:text-white transition-colors duration-300">
              OUR MENU
            </button>
          </Link>
        </div>

        {/* Social icons fixed in bottom-left */}
        <div className="absolute bottom-4 left-4 flex gap-4">
        <Link href="https://www.linkedin.com/company/tomahawk-ae/" target="_blank" rel="noopener noreferrer">
            <Image src="/linked.png" width={45} height={55} alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/tomahawkcaffe/" target="_blank" rel="noopener noreferrer">
            <Image src="/insta.png" width={45} height={55} alt="Instagram" />
          </Link>
          {/* <Link href="https://www.youtube.com/@Rubyrelish44" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube_icon.png" width={45} height={55} alt="YouTube" />
          </Link> */}
         
        </div>
      </div>

      {/* Video Side */}
      {/* Video Side */}
<div className="relative w-full md:w-1/2 h-[300px] md:h-screen">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/t1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
</div>

    </div>
  );
};

export default ImageSlider;
