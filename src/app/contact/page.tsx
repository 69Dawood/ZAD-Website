import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us | ZAD Marketing',
  description: 'Connect with ZAD to explore tailored digital strategies designed to aggressively grow your brand.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-teal-400/20 to-cyan-300/20 py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
      </section>

      {/* Main Content Split Layout */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text & Email */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Find the Perfect Solution for Your Business
            </h2>
            <p className="text-gray-600 text-lg mt-4 leading-relaxed">
              Connect with ZAD to explore tailored digital strategies designed to aggressively grow your brand. Whether you need high-converting Meta Ads, Google Ads, SEO, PPC, Social Media Advertising, Email Marketing, Conversion Rate Optimization (CRO), targeted Google Search campaigns, or a complete digital overhaul, our team is ready to scale your revenue. Drop us an email, and we will get back to you within 24 hours.
            </p>

            <div className="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm inline-block">
              <p className="text-gray-500 font-semibold mb-1 uppercase tracking-wider text-sm">Direct Email</p>
              <a href="mailto:info@zad-marketing.com" className="text-2xl font-bold text-[#00bcd4] hover:text-teal-600 transition-colors">
                info@zad-marketing.com
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 group">
            <Image 
              src="/image10.jpg" 
              alt="Contact ZAD Marketing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
