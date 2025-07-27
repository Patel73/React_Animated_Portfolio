import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-80 text-white shadow-md ">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <span className="text-2xl font-bold tracking-wide">Portfolio</span>

        <ul className="hidden md:flex gap-8 font-semibold text-sm">
          <a href="#Home"><li className="hover:text-cyan-400 transition">Home</li></a>
          <a href="#About"><li className="hover:text-cyan-400 transition">About</li></a>
          <a href="#Experience"><li className="hover:text-cyan-400 transition">Experience</li></a>
          <a href="#Skills"><li className="hover:text-cyan-400 transition">Skills</li></a>
          <a href="#Projects"><li className="hover:text-cyan-400 transition">Projects</li></a>
          <a href="#Contact"><li className="hover:text-cyan-400 transition">Contact</li></a>
        </ul>

        <div className="md:hidden z-50">
          {menuOpen ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-4 right-4 bg-black bg-opacity-90 rounded-xl px-6 py-4 flex flex-col gap-4 text-center font-semibold text-sm transition-all duration-300">
          <a href="#Home"><li className="hover:text-cyan-400 transition">Home</li></a>
          <a href="#About" onClick={() => setMenuOpen(false)}><li>About</li></a>
          <a href="#Experience" onClick={() => setMenuOpen(false)}><li>Experience</li></a>
          <a href="#Skills" onClick={() => setMenuOpen(false)}><li>Skills</li></a>
          <a href="#Projects" onClick={() => setMenuOpen(false)}><li>Projects</li></a>
          <a href="#Contact" onClick={() => setMenuOpen(false)}><li>Contact</li></a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
