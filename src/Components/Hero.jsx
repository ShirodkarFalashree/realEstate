import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';



const images = [
  'https://images.pexels.com/photos/1182284/pexels-photo-1182284.jpeg',
  'https://images.pexels.com/photos/1214577/pexels-photo-1214577.jpeg',
  'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg',
    'https://images.pexels.com/photos/955658/pexels-photo-955658.jpeg',
  'https://images.pexels.com/photos/879794/pexels-photo-879794.jpeg',
  'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg',
  'https://images.pexels.com/photos/237266/pexels-photo-237266.jpeg'
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const textRef = useRef([]);
  textRef.current = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden font-basic">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <p className="text-[12px] tracking-widest mb-4" ref={addToRefs}>
          CAPTURING STORIES IN FRAMES
        </p>
        <h1 className="text-6xl md:text-7xl font-hero mb-6" ref={addToRefs}>
          Aarav Kapoor Photography
        </h1>
        <p className="text-lg mb-8" ref={addToRefs}>
          Lifestyle | Wedding | Travel Photographer
        </p>
        <button
          className="bg-black font-basic text-[12px] text-white px-11 py-6 cursor-pointer transition"
          ref={addToRefs}
        >
          VIEW PORTFOLIO →
        </button>
      </div>
    </div>
  );
};

export default Hero;
