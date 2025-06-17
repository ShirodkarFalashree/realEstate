import React from "react";

const Contact = () => {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1740&q=80')", // Replace with your own image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-10 font-hero">
          Connect With Jade
        </h1>
        <button className="bg-black text-white px-8 py-3 font-basic uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          Contact Jade →
        </button>
      </div>
    </div>
  );
};

export default Contact;
