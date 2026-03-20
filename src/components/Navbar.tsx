import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center bg-transparent">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="text-gray-900 font-extrabold text-2xl tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-400">
            ZAD
            <span className="text-teal-500 inline-block group-hover:-translate-y-1 transition-transform duration-300">.</span>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-teal-400 shadow-sm flex-shrink-0">
            <Image src="/zadlogo.png" alt="ZAD Logo" width={36} height={36} className="object-cover w-full h-full" />
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

        {/* Mobile Menu Button - simple styling placeholder */}
        <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#00bcd4]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
