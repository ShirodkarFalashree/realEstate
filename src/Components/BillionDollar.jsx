import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import photo from '../assets/pictures/asset 9.jpeg';

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
    src={photo}
    alt="Jade Mills"
    className="w-full h-full object-contain md:object-cover"
  />
</div>


      {/* Right Content */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 py-10 md:py-0">
        <h1 className="text-[28px] sm:text-[40px] md:text-[64px] lg:text-[76.8px] font-hero leading-tight animate-bd">
          The 9 Billion Dollar Woman
        </h1>

        <p className="text-[14px] sm:text-[16px] leading-6 sm:leading-8 font-basic mt-4 sm:mt-6 max-w-[95%] sm:max-w-[600px] md:max-w-[700px] animate-bd">
          With over $9 Billion in sales, Jade Mills has developed a global
          reputation as the top Los Angeles & Beverly Hills real estate agent.
          She is ranked as the #1 Agent Worldwide for Coldwell Banker.
          <br />
          <br />
          Due to her expertise in the Beverly Hills real estate market and her
          integrity, loyalty & professionalism, Jade is sought out by A-list
          celebrities, tech founders, and business leaders.
          <br />
          <br />
          Contact Jade Mills to sell & find houses, gated estates, condos,
          mansions & luxury homes for sale in Beverly Hills, Malibu, Holmby
          Hills, Bel Air & more.
        </p>

        <button className="bg-black font-basic text-[12px] sm:text-[14px] text-white px-6 sm:px-10 py-4 sm:py-6 mt-4 sm:mt-6 hover:bg-gray-900 transition animate-bd">
          GET TO KNOW JADE →
        </button>
      </div>
    </div>
  );
};

export default BillionDollar;
