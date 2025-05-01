import React from 'react';
import Navbara from '@/Components/Navbara';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = () => {
  return (
    <div>
      <Navbara />
      <main className="py-5 px-5 md:px-12 lg:px-28 text-black min-h-screen bg-white">
        {/* Hero Section */}
        <section className="mb-10 mt-16 relative z-0">
  <div
    className="w-full min-h-[70vh] md:h-screen bg-cover bg-center flex items-center justify-center relative"
    style={{
      backgroundImage: "url('/bg-mh.jpg')", // Same image for both mobile and desktop
    }}
  >
    <div className="absolute inset-0 bg-black/40" />
    <div className="z-70 relative text-center px-4 md:px-40">
      <h1 className="opacity-0">Welcome to Tomahawk</h1>
      <p className="opacity-0">The finest café experience on Reem Island</p>
    </div>
  </div>
</section>







        {/* About Section */}
        <section className="bg-[#101f26] p-6 rounded-lg my-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1 p-4">
              <h3 className="text-xl sm:text-3xl font-medium text-black mb-6">ABOUT US</h3>
              <p className="text-[18px] text-[#7d7e84] leading-[1.55] font-[400] font-['Poppins']">
                Tomahawk offers a wide variety of menu options including fresh pastries, salads, burgers, and more.
                Whether you are a resident or a visitor, we invite you to explore Tomahawk Café and discover why it is considered the best café on Reem Island.
                Enjoy our comfortable outdoor seating, perfect for sipping coffee in the fresh air.
                Plus, our café provides free Wi-Fi in every corner, making it an ideal place to work, study, or connect with friends.
                Tomahawk is your go-to spot for creativity, comfort, and productivity.
              </p>
            </div>
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
                src="/ab1.jpg"
                alt="About Tomahawk"
                width={400}
                height={450}
                className="rounded-t-full shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Second About Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
                src="/ab2.jpg"
                alt="Inside Tomahawk"
                width={400}
                height={450}
                className="rounded-tr-full shadow-lg object-contain"
              />
            </div>
            <div className="flex-1 p-4">
              <p className="text-[#585d5f] leading-relaxed text-sm">
                With its thoughtfully curated menu and cozy atmosphere, Tomahawk Café is more than just a coffee shop.
                From morning brews to evening meals, we cater to every mood and moment.
                Discover our outdoor seating, stay connected with complimentary Wi-Fi, and make Tomahawk your everyday creative escape on Reem Island.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <div className="bg-[#101f26] p-6 rounded-lg my-8 animate-borderabc">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link
                href="https://www.instagram.com/tomahawkcaffe/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/insta.png"
                  alt="Instagram Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">Instagram</h3>
              <p className="text-black text-sm">Search for @tomahawkcaffe and follow us!</p>
            </div>

            {/* Facebook */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link
                href="https://www.facebook.com/tomahawkcaffe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/face.png"
                  alt="Facebook Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">Facebook</h3>
              <p className="text-black text-sm">Find Tomahawk Caffe on Facebook!</p>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link
                href="https://www.linkedin.com/company/tomahawk-ae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linked.png"
                  alt="LinkedIn Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-black mb-2">LinkedIn</h3>
              <p className="text-black text-sm">Connect with us on LinkedIn!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Aboutus;
