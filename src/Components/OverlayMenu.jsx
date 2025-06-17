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

  // Helper to wrap each letter in a span
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

    // Animate the letters with stagger
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
      className="fixed inset-0 bg-black z-[9999] text-white font-[Italiana] flex px-20 py-16"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-3xl cursor-pointer"
      >
        <FaTimes />
      </button>

      {/* Left Menu */}
      <div className="w-1/2 flex flex-col justify-center gap-10 text-[4rem] leading-none">
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
      <div className="w-1/2 flex flex-col justify-center gap-4 text-2xl pl-10">
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
