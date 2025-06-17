import React, { useEffect, useRef } from 'react';
import { FaTimes, FaChevronRight } from 'react-icons/fa';
import { gsap } from 'gsap';

const OverlayMenu = ({ onClose }) => {
  const overlayRef = useRef(null);
  const subMenuRef = useRef(null);

  const leftMenu = [
    'Home',
    'About Jade',
    'Exclusive Listings',
    'Sold Listings',
    'Global Collective',
    'Contact',
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

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }, []);

  const handleHover = () => {
    gsap.to(subMenuRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    gsap.to(subMenuRef.current, {
      autoAlpha: 0,
      x: 20,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[9999] text-white font-[Italiana] flex px-20 py-16"
    >
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-6 right-8 text-white text-3xl">
        <FaTimes />
      </button>

      {/* Left Menu */}
      <div className="w-1/2 flex flex-col justify-center gap-8 text-[4rem] leading-none">
        {leftMenu.map((item) =>
          item === 'Contact' ? (
            <div
              key={item}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="cursor-pointer"
            >
              <div className="text-sm font-semibold tracking-wider mb-2 flex items-center gap-1">
                CONTACT <FaChevronRight size={10} />
              </div>
            </div>
          ) : (
            <div key={item} className="hover:opacity-70 cursor-pointer">
              {item}
            </div>
          )
        )}
      </div>

      {/* Right Submenu */}
      <div
        ref={subMenuRef}
        className="w-1/2 flex flex-col justify-center gap-4 text-2xl pl-10 opacity-0 translate-x-5 pointer-events-none"
      >
        {rightMenu.map((item) => (
          <div key={item} className="hover:opacity-80 cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlayMenu;
