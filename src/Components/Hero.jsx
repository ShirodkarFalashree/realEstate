import React, { useEffect,useState } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Switching to image:', current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // 4s interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden font-basic">
      {/* Background Slideshow */}
      {images.map((img, index) => {
        console.log(`Rendering image ${index}: ${img}`);
        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-black bg-opacity-10 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        );
      })}

            <div className="absolute inset-0 bg-black/50 bg-opacity-10 z-10"></div>


      {/* Content */}
      <div className="relative z-20 flex flex-col items-center  justify-center h-full text-white text-center px-4">
        <p className="text-[12px] tracking-widest mb-4">THE 9 BILLION DOLLAR WOMAN</p>
        <h1 className="text-6xl md:text-7xl font-hero mb-6">Jade Mills Estates</h1>
        <p className="text-lg mb-8">Coldwell Banker Global Luxury Ambassador</p>
        <button className="bg-black font-basic text-[12px] text-white px-11 py-6 cursor-pointer transition">
          SEARCH ALL HOMES →
        </button>
      </div>
    </div>
  );
};

export default Hero;