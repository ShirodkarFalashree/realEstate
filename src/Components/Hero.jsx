import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import bg1 from '../assets/pictures/asset 18.jpeg';
import bg2 from '../assets/pictures/asset 19.jpeg';
import bg3 from '../assets/pictures/asset 35.jpeg';
import bg4 from '../assets/pictures/asset 36.jpeg';
import bg5 from '../assets/pictures/asset 37.jpeg';
import bg6 from '../assets/pictures/asset 38.jpeg';
import bg7 from '../assets/pictures/asset 41.jpeg';
import bg9 from '../assets/pictures/asset 4.jpeg';
import bg10 from '../assets/pictures/asset 17.jpeg';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg9, bg10];

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

  // GSAP Fade-in on load
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 30,
      },
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
        <p
          className="text-[12px] tracking-widest mb-4"
          ref={addToRefs}
        >
          THE 9 BILLION DOLLAR WOMAN
        </p>
        <h1
          className="text-6xl md:text-7xl font-hero mb-6"
          ref={addToRefs}
        >
          Jade Mills Estates
        </h1>
        <p
          className="text-lg mb-8"
          ref={addToRefs}
        >
          Coldwell Banker Global Luxury Ambassador
        </p>
        <button
          className="bg-black font-basic text-[12px] text-white px-11 py-6 cursor-pointer transition"
          ref={addToRefs}
        >
          SEARCH ALL HOMES →
        </button>
      </div>
    </div>
  );
};

export default Hero;
