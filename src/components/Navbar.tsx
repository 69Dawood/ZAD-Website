'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center bg-transparent">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group cursor-pointer">
          <div className="text-gray-900 font-extrabold text-2xl tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-400">
            ZAD
            <span className="text-teal-500 inline-block group-hover:-translate-y-1 transition-transform duration-300">.</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
          <Link href="/" className="hover:text-[#00bcd4] transition-colors">Home</Link>

          {/* Dropdown for About Us */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-[#00bcd4] transition-colors">
              About Us <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <Link href="/about/dawood" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#00bcd4] transition-colors border-b border-gray-50">
                Dawood
              </Link>
              <Link href="/about/zeeshan" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#00bcd4] transition-colors border-b border-gray-50">
                Zeeshan
              </Link>
              <Link href="/about/ali" className="block px-6 py-3 hover:bg-gray-50 hover:text-[#00bcd4] transition-colors">
                Ali
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#00bcd4] transition-colors">Contact Us</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#00bcd4] transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1 font-semibold text-gray-700">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-3 border-b border-gray-100 hover:text-[#00bcd4] transition-colors"
            >
              Home
            </Link>

            {/* About Us Accordion */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center py-3 hover:text-[#00bcd4] transition-colors"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${aboutOpen ? 'rotate-180 text-[#00bcd4]' : ''}`}
                />
              </button>
              {aboutOpen && (
                <div className="flex flex-col pl-4 pb-2 gap-1 text-gray-600 font-medium">
                  <Link href="/about/dawood" onClick={closeMenu} className="py-2 hover:text-[#00bcd4] transition-colors">
                    Dawood
                  </Link>
                  <Link href="/about/zeeshan" onClick={closeMenu} className="py-2 hover:text-[#00bcd4] transition-colors">
                    Zeeshan
                  </Link>
                  <Link href="/about/ali" onClick={closeMenu} className="py-2 hover:text-[#00bcd4] transition-colors">
                    Ali
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 hover:text-[#00bcd4] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
