import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-[80vh] flex md:flex-row flex-col bg-white">
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-[250px] md:min-h-[80vh]">
        <Image
          src="/ab.jpg"
          alt="About image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Side */}
      {/* Text Side */}
{/* Text Side */}
<div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-[#fdfaf2]">
  <div className="animate-borderab rounded-xl p-8 shadow-lg bg-white max-w-md w-full min-h-[60vh] flex flex-col justify-center text-left">
    <h1 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">OUR STORY</h1>
    <p className="mb-6 text-gray-800 leading-relaxed text-sm md:text-base">
      Welcome to the best specialty café on Reem Island. It’s a unique concept — we believe the best coffees bring people together. 
      At Tomahawk, we craft drinks from premium beans and offer culinary delights from around the world, making each visit flavorful and memorable. <br />
      <strong>Explore the foods</strong>, <strong>Ambiance and Experience</strong>
    </p>
    <Link href="/Aboutus" className="text-[#d3ad3c] font-semibold hover:underline self-start">
      More...
    </Link>
  </div>
</div>


    </div>
  );
};

export default About;
