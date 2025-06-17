import React, { useState } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import OverlayMenu from './OverlayMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-30 bg-transparent text-white flex justify-between items-center px-14 py-9 text-[12px] font-basic">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <span>PROPERTIES</span>
            <FaChevronDown size={12} />
          </div>
          <div className="cursor-pointer hover:text-gray-300">HOME SEARCH</div>
        </div>

        <div className="text-white text-5xl font-nav tracking-wide">Jade Mills</div>

        <div className="flex items-center gap-8">
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
      </div>

      {menuOpen && <OverlayMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
