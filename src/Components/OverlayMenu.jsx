import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';

const OverlayMenu = ({ onClose }) => {
  const overlayRef = useRef(null);
  const leftMenuRef = useRef([]);
  const rightMenuRef = useRef([]);

  const leftMenu = [
    'Home',
    'About Jade',
    'Exclusive Listings',
    'Sold Listings',
    'Global Collective',
  ];

  const rightMenu = [
    'Communities',
    'Home Search',
    'Homes For Sale',
    'News',
    'Blog',
    'International Luxury Alliance',
    'Elite Global Agents',
    'My Account',
  ];

  const splitText = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="inline-block opacity-0 translate-y-3">
        {char}
      </span>
    ));

  useEffect(() => {
    const leftSpans = leftMenuRef.current.flatMap((el) =>
      Array.from(el.querySelectorAll('span'))
    );
    const rightSpans = rightMenuRef.current.flatMap((el) =>
      Array.from(el.querySelectorAll('span'))
    );

    gsap.to([...leftSpans, ...rightSpans], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[9999] text-white font-[Italiana] flex flex-col lg:flex-row px-6 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 lg:py-16"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl sm:text-3xl"
      >
        <FaTimes />
      </button>

      {/* Left Menu */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-tight lg:leading-none mt-16 lg:mt-0">
        {leftMenu.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (leftMenuRef.current[idx] = el)}
            className="cursor-pointer hover:opacity-70"
          >
            {splitText(item)}
          </div>
        ))}
      </div>

      {/* Right Menu */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl pl-0 lg:pl-10 mt-10 lg:mt-0">
        {rightMenu.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (rightMenuRef.current[idx] = el)}
            className="cursor-pointer hover:opacity-80"
          >
            {splitText(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlayMenu;
