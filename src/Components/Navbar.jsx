import React, { useState } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-30 bg-transparent text-white px-4 sm:px-10 lg:px-14 py-6 sm:py-9 text-[12px] font-basic flex items-center justify-between">
        
        {/* Left Side - Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <span>PROPERTIES</span>
            <FaChevronDown size={12} />
          </div>
          <div className="cursor-pointer hover:text-gray-300">HOME SEARCH</div>
        </div>

        {/* Center - Logo */}
        <div className="text-2xl sm:text-4xl md:text-5xl font-nav tracking-wide text-center mx-auto md:mx-0">
         The Kapoors
        </div>

        {/* Right Side - Contact + Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="cursor-pointer hover:text-gray-300">CONTACT</div>
          <div className="cursor-pointer hover:text-gray-300">310.285.7508</div>
          <div
            className="cursor-pointer hover:text-gray-300 flex items-center gap-2"
            onClick={() => setMenuOpen(true)}
          >
            <span>MENU</span>
            <FaBars size={20} />
          </div>
        </div>

        {/* Mobile Only - Menu Icon */}
        <div
          className="md:hidden flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={20} />
        </div>
      </div>

      {menuOpen && <OverlayMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
