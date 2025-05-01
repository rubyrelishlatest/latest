"use client";
import React from 'react';
import Navbara from '@/Components/Navbara';
import Footer from '@/Components/Footer';
import { useState } from 'react';


const Contact = () => {


  const [form, setForm] = useState({ name: '', email: '',subject:'', message:''  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      // alert('Message sent!');
      setForm({ name: '', email: '',subject:'', message: '' });
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <Navbara />

      {/* Google Maps Embed Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 lg:px-28 py-16 bg-gray-100 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6797535686165!2d54.4009283!3d24.4869067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6764ef9a614f%3A0xe053057e1ea7c558!2sTomahawk%20Reem%20Island%20%D8%AA%D9%88%D9%85%D8%A7%D9%87%D9%88%D9%83%20%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D9%85%20%D8%A3%D8%A8%D9%88%20%D8%B8%D8%A8%D9%8A!5e0!3m2!1sen!2sae!4v1714040004604!5m2!1sen!2sae"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] border-0 rounded-lg shadow-lg"
        ></iframe>
      </div>

      <div className="flex-1 p-4"></div>

      {/* Contact Info Section in Modern Square Cards */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 lg:px-28 py-16 space-y-8 md:space-y-0">
        <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
          <h2 className="text-2xl font-bold text-black">Location</h2>
          <p className="text-[#d3ad3c]">Tomahawk<br />Reem Island - Al Reem Island - Najmat<br />Abu Dhabi<br />United Arab Emirates</p>
        </div>

        <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
          <h2 className="text-2xl font-bold text-black">Call us</h2>
          <p className="text-[#d3ad3c]">Call us: 026507070</p>
        </div>

        <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
          <h2 className="text-2xl font-bold text-black">Write To Us</h2>
          <p className="text-[#d3ad3c]">info@tomahawkcaffe.ae</p>
        </div>

        <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
          <h2 className="text-2xl font-bold text-black">Follow Us</h2>
          <p className="text-[#d3ad3c]">@tomahawkcaffe</p>
        </div>
      </div>

      <div className="flex-1 p-4"></div>

      {/* Modern Black Contact Section */}
      <div className="bg-black text-white px-6 md:px-24 lg:px-40 py-32">
        {/* Heading + Subheading */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <div className="flex-1 p-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Leave Us Your Message
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            If you would like to leave feedback about our products or services, please fill out the form below to contact our team.
          </p>
        </div>

        {/* Two-column Form */}
        <div className="max-w-6xl mx-auto mb-14 ">
        <br />
          <form  onSubmit={handleSubmit} className=" md:flex-row gap-12 md:gap-20 px-4 md:px-0 mb-40">
            {/* Left Side - Name, Email, Subject */}

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-6xl mx-auto mb-14">
  {/* Left Side - Name, Email, Subject */}
  <div className="w-full md:w-1/2 space-y-10">
    <div className="flex flex-col">
      <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">
        Name <span className="text-[#d3ad3c]">*</span>
      </label>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        type="text"
        className="w-full bg-black text-white py-3 rounded-md focus:outline-none"
      />
      <hr className="border-t border-white mt-2" />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">
        Email <span className="text-[#d3ad3c]">*</span>
      </label>
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        type="email"
        className="w-full bg-black text-white py-3 rounded-md focus:outline-none"
      />
      <hr className="border-t border-white mt-2" />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">
        Subject <span className="text-[#d3ad3c]">*</span>
      </label>
      <input
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        type="text"
        className="w-full bg-black text-white py-3 rounded-md focus:outline-none"
      />
      <hr className="border-t border-white mt-2" />
    </div>
  </div>

  {/* Right Side - Message */}
  <div className="w-full md:w-1/2">
    <div className="flex flex-col">
      <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">
        Message <span className="text-[#d3ad3c]">*</span>
      </label>
      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows="10"
        className="w-full bg-black text-white py-3 resize-none rounded-md focus:outline-none"
      ></textarea>
      <hr className="border-t border-white mt-2" />
    </div>
  </div>
</div>
<br/>
          <div className="mt-12 text-center">
          <button
  type="submit"
  className="mb-9 border border-[#d3ad3c] py-2 px-4 rounded text-white font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-[#d3ad3c] hover:text-white"
>
  Send Message
</button>

          </div>
          </form>


        
        </div>
      </div>

      {/* Horizontal Image Section with Space Between */}
      <br />
      <div className="px-5 py-12">
  <div className="flex justify-between space-x-8">
    <div className="flex justify-center items-center">
      <a href="link1" target="_blank">
        <img
          src="/bg-h2.jpg"
          alt="Image 1"
          className="w-[200px] h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
        />
      </a>
    </div>
    <div className="flex justify-center items-center">
      <a href="link2" target="_blank">
        <img
          src="/bg-h3.jpg"
          alt="Image 2"
          className="w-[200px] h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
        />
      </a>
    </div>
    <div className="flex justify-center items-center">
      <a href="link3" target="_blank">
        <img
          src="/bg-h4.jpg"
          alt="Image 3"
          className="w-[200px] h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
        />
      </a>
    </div>
    <div className="flex justify-center items-center">
      <a href="link4" target="_blank">
        <img
          src="/bg-h5.jpg"
          alt="Image 4"
          className="w-[200px] h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
        />
      </a>
    </div>
  </div>
</div>



<br />
      <Footer />
    </div>
  );
};

export default Contact;
