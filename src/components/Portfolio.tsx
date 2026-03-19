import React from 'react';
import Image from 'next/image';

interface PortfolioProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="pt-24 min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Circular image placeholder container */}
          <div className="w-64 h-64 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden border-4 border-teal-400 relative shrink-0 text-teal-500 font-semibold shadow-xl">
               <span className="z-10 bg-white/80 px-2 py-1 rounded">No Image ({imageSrc})</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#00bcd4] mb-4">{name}</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{role}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <button className="bg-[#00bcd4] hover:bg-teal-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/30">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
