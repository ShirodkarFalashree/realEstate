import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BillionDollar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-bd', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden"
    >
      {/* Left Image */}
      <div className="w-full aspect-[3/2] sm:aspect-[4/3] md:h-full">
        <img
          src="https://res.cloudinary.com/dghoya7tk/image/upload/v1750543187/Gemini_Generated_Image_1uuf9v1uuf9v1uuf_ox3qnf.png"
          alt="Aarav Kapoor"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 py-10 md:py-0">
        <h1 className="text-[28px] sm:text-[40px] md:text-[64px] lg:text-[76.8px] font-hero leading-tight animate-bd">
          Framing Stories Through Light
        </h1>

        <p className="text-[14px] sm:text-[16px] leading-6 sm:leading-8 font-basic mt-4 sm:mt-6 max-w-[95%] sm:max-w-[600px] md:max-w-[700px] animate-bd">
          With over a decade behind the lens, Aarav Kapoor has become one of the most sought-after visual storytellers in India. His work spans across wedding stories, candid portraits, travel diaries, and editorial campaigns.
          <br />
          <br />
          Known for his subtle use of natural light and authentic emotion, Aarav captures the in-between moments that most overlook — the fleeting glance, the wind in the veil, the raw laughter.
          <br />
          <br />
          If you’re looking for timeless, soulful photographs that tell your story, you're in the right place.
        </p>

        <button className="bg-black font-basic text-[12px] sm:text-[14px] text-white px-6 sm:px-10 py-4 sm:py-6 mt-4 sm:mt-6 hover:bg-gray-900 transition animate-bd">
          MEET AARAV →
        </button>
      </div>
    </div>
  );
};

export default BillionDollar;
