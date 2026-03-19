"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, MousePointerClick, Megaphone, TrendingUp, Search, BarChart3, PieChart, Activity, ExternalLink, Star, Plus, X, Palette, Video, Camera, LayoutTemplate, Phone } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      {/* Background Decor - Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-[0]"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-[0]" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-[0]" style={{ animationDelay: '4s' }}></div>
      
      {/* Static Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-50 blur-3xl opacity-60 pointer-events-none z-[0]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-50 blur-3xl opacity-60 pointer-events-none z-[0]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Copy & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Dominate Your Market with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-teal-400">High-Converting Meta & Google Ads</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We take a data-driven, ROI-focused approach to paid advertising, helping businesses generate qualified leads and predictable revenue through high-performance campaigns on Meta and Google. Instead of wasting your budget on poorly optimized ads, our team focuses on advanced targeting, creative testing, and continuous optimization to ensure every dollar works harder for your business. From campaign strategy to performance scaling, we build advertising systems designed to consistently attract the right audience, convert them into customers, and accelerate your long-term growth.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Image Placeholder */}
          <motion.div 
            className="flex-1 w-full relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Main Creative Shape */}
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-[3rem] bg-gradient-to-tr from-[#00bcd4]/10 to-teal-100 flex shadow-2xl overflow-hidden border-8 border-white p-8 group border-r-teal-50 border-b-cyan-50">
              
              <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/image1.jpg"
                  alt="ZAD Marketing Hero"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <RevolutionSection />
      <WebDesignSection />
      <CreativeSection />
      <PerformanceSection />
      <CampaignsSection />
      <MidPageCTASection />
      <ScheduleDemoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </div>
  );
}

const MidPageCTASection = () => {
  return (
    <section className="py-24 bg-teal-50/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Got a New Project? <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#00bcd4]">Let's Scale It.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            We understand that every business is unique. Our team of media buyers and strategists is ready to provide you with a FREE, detailed ad audit and transparent pricing proposal. Take the first step toward dominating your market.
          </p>

          <div className="flex flex-col md:flex-row gap-6 my-10 justify-center">
             <div className="bg-teal-50 p-6 rounded-2xl shadow-sm border border-teal-100/50 flex flex-col items-center text-center flex-1">
               <h4 className="font-bold text-gray-900 mb-2 truncate text-lg">1. Account Audit</h4>
               <p className="text-gray-600 text-sm">We analyze your past ad spend to find wasted budget.</p>
             </div>
             <div className="bg-teal-50 p-6 rounded-2xl shadow-sm border border-teal-100/50 flex flex-col items-center text-center flex-1">
               <h4 className="font-bold text-gray-900 mb-2 text-lg">2. Competitor Analysis</h4>
               <p className="text-gray-600 text-sm">We reverse-engineer what is working for your rivals.</p>
             </div>
             <div className="bg-teal-50 p-6 rounded-2xl shadow-sm border border-teal-100/50 flex flex-col items-center text-center flex-1">
               <h4 className="font-bold text-gray-900 mb-2 text-lg">3. Scaling Strategy</h4>
               <p className="text-gray-600 text-sm">You get a custom, step-by-step roadmap to scale your ROAS.</p>
             </div>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://wa.me/923112858678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CreativeSection = () => {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Creative Assets That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-teal-400">Stop the Scroll</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In today’s fast-moving social media environment, strong creative content is the key to capturing attention and driving results. On platforms like Meta and TikTok, the quality of your creative often determines the success of your advertising campaigns. That’s why we focus on producing visually compelling assets that immediately stand out in crowded feeds. Our team provides a full range of creative services including professional graphic design, short-form video editing, and ad-focused photoshoots.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in building powerful visual increasing engagement and improving click-through rates (CTR). Whether it’s dynamic product showcases, high-converting ad creatives, our creative assets are designed to stop the scroll, spark interest, and guide potential customers toward taking action
            </p>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              { icon: <Palette className="w-8 h-8 text-[#00bcd4]" />, text: "Graphic Design" },
              { icon: <Video className="w-8 h-8 text-[#00bcd4]" />, text: "Video Editing" },
              { icon: <Camera className="w-8 h-8 text-[#00bcd4]" />, text: "Photoshoots" },
              { icon: <LayoutTemplate className="w-8 h-8 text-[#00bcd4]" />, text: "UI/UX Design" }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:bg-teal-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer aspect-square"
              >
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-8 h-8 text-[#00bcd4] group-hover:text-white transition-colors duration-300" })}
                </div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">{feature.text}</h4>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const WebDesignSection = () => {
  return (
    <section className="py-24 bg-gray-50/80 overflow-hidden backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Image (Alternating order) */}
          <div className="order-2 lg:order-1 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
            <Image 
              src="/image3.png" 
              alt="Web Design and CRO"
              fill
              className="object-cover animate-[bounce_3s_infinite]"
            />
            {/* Decorative element over the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00bcd4]/10 to-teal-100/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Smart, Scalable Web Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#00bcd4]">Conversion Optimization</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Traffic means nothing if your website doesn't convert. Our full-service offering includes high-converting website design, ongoing maintenance, and rapid speed enhancement. We build landing pages specifically optimized for your Google and Meta ad traffic.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              By improving load times and refining the user experience (UX) through strategic layouts and compelling copywriting, we drastically reduce bounce rates and maximize the ROI of every ad dollar you spend. We ensure your digital storefront operates flawlessly 24/7, turning casual clicks into loyal customers.
            </p>
            
            {/* 4 Feature Tags Grid */}
            <div className="grid grid-cols-2 gap-4">
              {['Web Design', 'Bug Fixing', 'Speed Optimization', 'Maintenance'].map((tag, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-transparent text-gray-800 font-semibold hover:border-teal-500 hover:text-teal-900 hover:font-bold hover:shadow-md transition-all duration-300 cursor-default">
                   <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                   {tag}
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const RevolutionSection = () => {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              How Digital Advertising Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-teal-400">Revolutionize Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Digital advertising has become one of the most powerful tools for modern business growth. With billions of people actively using search engines and social media platforms every day, businesses now have the opportunity to reach highly targeted audiences at the exact moment they are searching for products or services. At ZAD, we go beyond simply launching ads we build strategic campaigns designed to generate measurable growth. Our approach focuses on high-intent Google Search Engine Marketing (SEM), advanced Pay-Per-Click (PPC) strategies, and high-performing Social Media Marketing campaigns across Meta and TikTok. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              While SEO builds your long-term organic presence, paid advertising provides immediate visibility and faster results. Our data-driven advertising strategies are designed to generate consistent leads, increase sales, and maximize return on investment. Through continuous testing, optimization, and performance analysis, we ensure that every campaign improves over time and delivers stronger results.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 group">
            <Image 
              src="/image2.jpg" 
              alt="Digital Advertising Revolution"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Decorative element over the image */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTABannerSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Gradient Background matching ZAD brand */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#005a66] to-[#00bcd4] -z-10"></div>
      
      {/* Decorative abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-300/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
          
          {/* Left Column (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Scale Your Business? <br className="hidden md:block"/> Let's Build Your Ad Strategy.
            </h2>
            <p className="text-xl text-teal-50 mb-10 max-w-2xl opacity-90">
              Stop guessing and start dominating. Book a free audit with our digital growth experts today and uncover the hidden revenue in your current campaigns.
            </p>
            
          </motion.div>

          {/* Right Column (Lead Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-lg mx-auto lg:mx-0"
          >
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="focus:ring-2 focus:ring-teal-500 outline-none w-full p-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="focus:ring-2 focus:ring-teal-500 outline-none w-full p-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border-none transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="focus:ring-2 focus:ring-teal-500 outline-none w-full p-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border-none transition-all"
                  required
                />
              </div>
              <div>
                <select 
                  className="focus:ring-2 focus:ring-teal-500 outline-none w-full p-3 rounded-lg bg-white/90 text-gray-800 border-none transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled selected hidden>What service do you need?</option>
                  <option value="meta_google">Meta & Google Ads</option>
                  <option value="seo_content">SEO & Content</option>
                  <option value="web_dev">Web Development</option>
                  <option value="automation">Marketing Automation</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-2 text-lg"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const FAQAccordion = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full focus:outline-none flex justify-between items-center text-left py-2 group"
      >
        <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#00bcd4]' : 'text-gray-900 group-hover:text-teal-600'}`}>
          {question}
        </h4>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-teal-50 text-[#00bcd4] rotate-45' : 'bg-gray-50 text-gray-500 group-hover:bg-teal-50 group-hover:text-[#00bcd4]'}`}>
          <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-6 text-gray-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to see results from Google Ads?",
      answer: "While campaigns can generate traffic immediately upon launch, it typically takes 2 to 4 weeks for Google's machine learning algorithms to fully optimize bidding strategies and for us to dial in negative keywords for maximum ROI."
    },
    {
      question: "What is a good ROAS (Return On Ad Spend)?",
      answer: "A 'good' ROAS depends entirely on your industry margins. E-commerce businesses generally target a 3x to 5x minimum ROAS to be profitable, whereas lead generation aims for an optimized CPL (Cost Per Lead) that backs into their customer lifetime value (LTV)."
    },
    {
      question: "Do you specialize in Meta (Facebook/Instagram) or Google?",
      answer: "We are experts in both. We utilize an omnichannel approach, often capturing high-intent search traffic via Google Ads, and scaling demand generation and powerful retargeting campaigns through the Meta ecosystem."
    },
    {
      question: "What is the difference between SEO and PPC?",
      answer: "SEO builds long-term organic traffic, while PPC/Google Ads provide instant, targeted visibility and immediate lead generation."
    },
    {
      question: "Why do I need Meta Ads if I already have organic social media?",
      answer: "Organic reach is declining. Meta Ads allow us to target specific demographics, behaviors, and retarget website visitors to guarantee your content is seen by buyers, not just followers."
    },
    {
      question: "Who designs the ad creatives?",
      answer: "Our in-house design team handles all ad creatives. We produce high-converting static images, carousels, and short-form video ads tailored specifically for the platforms they run on, ensuring maximum engagement and click-through rates."
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Everything you need to know about scaling with ZAD.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 border border-gray-100 max-w-3xl mx-auto">
          <div className="space-y-1">
            {faqs.map((faq, idx) => (
               <FAQAccordion key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ScheduleDemoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 my-20">
      <div className="bg-gray-900 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
        {/* Subtle Teal Glow */}
        <div className="absolute blur-3xl opacity-20 bg-teal-500 w-96 h-96 rounded-full -top-10 -right-10 pointer-events-none"></div>
        
        {/* Left Column (The Buttons) */}
        <div className="flex flex-col items-center md:items-start gap-4 z-10 w-full h-full md:order-1 order-2">
          <a
            href="#"
            className="inline-flex justify-center bg-teal-500 hover:bg-teal-400 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] whitespace-nowrap"
          >
            Book on Calendly
          </a>
          <a
            href="https://wa.me/923112858678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat With Us
          </a>
        </div>

        {/* Right Column (Team & Content) */}
        <div className="z-10 md:order-2 order-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Team Avatars */}
          <div className="flex gap-2 mb-6 flex-wrap justify-center md:justify-start">
            {/* Dawood - image12 */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 rounded-full border-4 border-gray-700 overflow-hidden shadow-lg relative">
                <Image src="/image12.jpeg" alt="Dawood Iqbal" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold text-teal-300">Dawood</span>
            </div>
            {/* Ali - image13ali */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 rounded-full border-4 border-gray-700 overflow-hidden shadow-lg relative">
                <Image src="/image13ali.jpeg" alt="Ali" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold text-teal-300">Ali</span>
            </div>
            {/* Zeeshan - image11 */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-20 h-20 rounded-full border-4 border-gray-700 overflow-hidden shadow-lg relative">
                <Image src="/image11.jpeg" alt="Zeeshan" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold text-teal-300">Zeeshan</span>
            </div>
          </div>

          {/* Headings */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            SCHEDULE YOUR CALL WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">ZAD</span>
          </h3>
          <p className="text-xl font-semibold text-gray-300 mt-2">
            Free 10-12 Minute Demo Call
          </p>

          {/* Description */}
          <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
            By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results. Find a time on our calendar to schedule your call today and we look forward to speaking to you soon!
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ZAD completely transformed our online presence. Their Meta Ad campaigns generated more qualified leads in one quarter than we had all of last year. Their data-driven approach is unmatched.",
      name: "Sarah Jenkins",
      role: "CMO, TechFlow Solutions",
      imageColor: "bg-blue-100 text-blue-600"
    },
    {
      quote: "The ROI we've seen since partnering with ZAD on Google Ads has been staggering. They didn't just bring us traffic; they completely optimized our funnel to double our conversion rate.",
      name: "Michael Chen",
      role: "Founder, Apex Retail",
      imageColor: "bg-teal-100 text-teal-600"
    },
    {
      quote: "We were burning cash on Facebook ads before ZAD stepped in. They audited our account, restructured our tracking with GA4, and turned a negative ROAS into a 450% profitable machine.",
      name: "Emily Rodriguez",
      role: "E-Commerce Director, Glow Beauty",
      imageColor: "bg-purple-100 text-purple-600"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="py-24 bg-[#00bcd4]/5 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's how we've scaled revenue for businesses just like yours.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1,2,3,4,5].map((star) => <Star key={star} size={20} fill="currentColor" /> )}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8 italic">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${test.imageColor}`}>
                   {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CampaignsSection = () => {
  const campaigns = [
    { title: "E-commerce Scale", stat: "+200% ROI", category: "Meta Ads", image: "/image4.jpg" },
    { title: "B2B Lead Gen", stat: "10k+ Leads", category: "Google Search", image: "/image5.jpg" },
    { title: "SaaS Launch", stat: "3x Growth", category: "Omnichannel", image: "/image6.jpg" },
    { title: "Local Service", stat: "-40% CPL", category: "Google Local", image: "/image7.jpg" },
    { title: "App Install", stat: "50k Users", category: "TikTok Ads", image: "/image8.jpg" },
    { title: "Retargeting", stat: "+150% ROAS", category: "Display", image: "/image9.jpg" }
  ];

  return (
    <section className="py-24 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Recent Campaigns</h2>
          <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped ambitious brands scale their revenue through precision-targeted advertising and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-md border-4 border-white isolate cursor-pointer"
            >
              <Image 
                src={campaign.image} 
                alt={campaign.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Default State - Category Label */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-[#00bcd4] shadow-sm z-10 transition-opacity duration-300 group-hover:opacity-0">
                {campaign.category}
              </div>

              {/* Hover Dark Overlay Overlay -> Simplified per Prompt 3 */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center text-center p-6 z-10">
                
                <p className="text-[#00bcd4] font-extrabold text-3xl md:text-4xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">
                  {campaign.stat}
                </p>
                
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-100">
                  {campaign.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

const StatCounter = ({ endValue, suffix = "", prefix = "", title }: { endValue: number, suffix?: string, prefix?: string, title: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Determine animation duration based on the value to make it feel natural
      const duration = 2000; // 2 seconds
      const incrementTime = 30; // 30ms per frame
      const totalSteps = Math.round(duration / incrementTime);
      const stepValue = endValue / totalSteps;
      
      const timer = setInterval(() => {
        start += stepValue;
        if (start > endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.round(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl lg:text-5xl font-extrabold text-[#00bcd4] mb-2 flex items-center justify-center">
        {prefix}{count}{suffix}
      </div>
      <p className="text-gray-600 font-semibold">{title}</p>
    </div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-white to-white opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 text-[#00bcd4] font-bold tracking-wider text-sm uppercase">
                <BarChart3 size={20} />
                <span>Data-Driven Engineering</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Stop Guessing. <br className="hidden lg:block"/> Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-teal-400">Measuring.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We don't rely on gut feelings. Our comprehensive approach integrates advanced Server-Side Tracking and GA4 analytics to definitively map your customer's journey from their first click to final purchase.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "End-to-end Conversion Tracking",
                  "Advanced GA4 & Tag Manager Setup",
                  "Attribution Modeling & ROAS Optimization",
                  "Real-Time Custom Dashboards"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[#00bcd4]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Counters Grid */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              
              {/* Decorative background blob behind stats */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-100/50 to-teal-50/50 rounded-full blur-3xl -z-10"></div>
              
              <div className="sm:col-span-2 sm:mb-4">
                <StatCounter 
                  endValue={150} 
                  suffix="%" 
                  prefix="+"
                  title="Average ROAS Increase" 
                />
              </div>
              <StatCounter 
                endValue={40} 
                prefix="-"
                suffix="%" 
                title="Cost Per Lead Reduction" 
              />
              <StatCounter 
                endValue={99} 
                suffix="%" 
                title="Client Retention Rate" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Google Ads (PPC)",
      description: "Capture high-intent search traffic and turn clicks into loyal customers with laser-focused campaigns.",
      icon: <MousePointerClick className="w-8 h-8 text-[#00bcd4]" />
    },
    {
      title: "Meta Ads Ecosystem",
      description: "Dominate Facebook and Instagram feeds with compelling creatives that drive massive conversions.",
      icon: <Megaphone className="w-8 h-8 text-[#00bcd4]" />
    },
    {
      title: "Conversion Rate Optimization",
      description: "Stop leaving money on the table. We optimize your funnels to maximize every dollar of ad spend.",
      icon: <TrendingUp className="w-8 h-8 text-[#00bcd4]" />
    },
    {
      title: "SEO",
      description: "Build long-term authoritative, organic visibility that consistently ranks your business at the top.",
      icon: <Search className="w-8 h-8 text-[#00bcd4]" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Core Services</h2>
          <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to scale your business and dominate your market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:bg-[#00bcd4] hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-[#00bcd4] group-hover:text-white transition-colors duration-300" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-teal-50 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
