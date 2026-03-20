import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Vibrant Glowing Top Border */}
      <div className="absolute top-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>

      <div className="container mx-auto px-4 lg:px-8 py-16 mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-extrabold text-white group cursor-pointer inline-block">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">ZAD</span>
                <span className="text-[#00bcd4] inline-block group-hover:-translate-y-1 transition-transform duration-300">.</span>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-teal-400 shadow-md flex-shrink-0">
                <Image src="/zadlogo.png" alt="ZAD Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are a data-driven digital marketing agency specializing in high-converting Meta and Google ads designed to aggressively scale your revenue.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li className="group"><Link href="/" className="inline-block hover:text-teal-400 hover:translate-x-1 transition-all duration-300">Home</Link></li>
              <li className="group"><span className="inline-block hover:text-teal-400 hover:translate-x-1 transition-all duration-300 cursor-default">About Us</span></li>
              <li className="group"><Link href="/contact" className="inline-block hover:text-teal-400 hover:translate-x-1 transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-teal-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block w-fit">Google Ads (PPC)</li>
              <li className="hover:text-teal-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block w-fit">Meta Ads Ecosystem</li>
              <li className="hover:text-teal-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block w-fit">SEO</li>
              <li className="hover:text-teal-400 hover:translate-x-1 transition-all duration-300 cursor-pointer block w-fit">Conversion Rate Optimization</li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-2 mb-6 text-gray-400">
              <li>Email: infyzad@gmail.com</li>
              <li>Phone: +92 3112858678</li>
              <li>Location: Islamabad, Pakistan</li>
            </ul>
            
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00bcd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00bcd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00bcd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#00bcd4] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2018 ZAD Marketing. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
