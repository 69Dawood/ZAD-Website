import React from 'react';
import Image from 'next/image';

export default function AliPortfolio() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text) */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
              Syed Muhammad Ali
            </h1>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400 mt-2">
              Performance Marketing Specialist | SEO & Content Strategist | AI Technologist
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              I bridge the gap between advanced Artificial Intelligence and aggressive digital growth. With a strong background in Machine Learning and Data Analytics, I don't just run campaigns—I engineer data-driven ecosystems. From managing Meta and Google Ad budgets exceeding $50,000/month to executing high-level Technical SEO strategies, my focus is on leveraging modern tech and automation to drastically lower acquisition costs and dominate search engine rankings.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full aspect-square max-w-md mx-auto rounded-3xl shadow-lg overflow-hidden relative border-2 border-teal-100">
            <Image
              src="/image13ali.jpeg"
              alt="Syed Muhammad Ali"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Expertise In Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Expertise In</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Performance Marketing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Meta & Google Ads Management
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                GA4, Meta Pixel & Tag Manager
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                ROAS Scaling & A/B Testing
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">SEO & Content Strategy</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Technical & On-Page SEO
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                High-Intent Copywriting
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Keyword & SERP Analysis
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">AI & Web Engineering</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Python, Django & Machine Learning
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                NLP & Custom Chatbot Development
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                WordPress & Front-End Dev
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Technical Project Mgmt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Agile / Scrum Methodologies
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Cross-Functional Team Leadership
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                ClickUp, Jira & Risk Mitigation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h3>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 before:to-transparent">

          {/* Milestone 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col mb-2">
                <span className="text-sm font-semibold text-teal-600 mb-1">Recent</span>
                <h4 className="text-xl font-bold text-gray-900">Performance Marketing Specialist</h4>
                <span className="text-md font-medium text-gray-500">@ AdGrowth Media</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Managed $50,000+/month Meta and Google Ad campaigns. Executed advanced audience segmentation and remarketing funnels, successfully improving conversion rates by 40% and reducing CPA.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col mb-2">
                <span className="text-sm font-semibold text-teal-600 mb-1">Previous</span>
                <h4 className="text-xl font-bold text-gray-900">Project Manager & SEO Team Lead</h4>
                <span className="text-md font-medium text-gray-500">@ PunkOS & DH Solution</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Spearheaded comprehensive SEO content strategies and led cross-functional squads of 15+ developers and marketers. Conducted technical SEO audits, implemented schema markups, and drove organic traffic growth.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            </div>
            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col mb-2">
                <span className="text-sm font-semibold text-teal-600 mb-1">Previous</span>
                <h4 className="text-xl font-bold text-gray-900">AI Research & Software Developer</h4>
                <span className="text-md font-medium text-gray-500">@ MIDL & Merik Solutions</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Developed backend features using Python/Django and built AI-based solutions, including NLP Sentiment Analyzers using ModernBERT and semantic-search Medical Chatbots.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto mb-16">
        <div className="bg-teal-50 rounded-3xl p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            
            {/* Education */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                Education
              </h3>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
                <h4 className="font-bold text-gray-900 text-lg">Bachelor of Science in Artificial Intelligence</h4>
                <p className="text-teal-600 font-medium mt-1">COMSATS University</p>
                <p className="text-gray-500 text-sm mt-3 border-t border-gray-100 pt-3">Focus: Data Analytics & Machine Learning</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Official Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                
                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">Meta Certified Media Buying Professional</span>
                </div>

                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">Google Ads Search Certified</span>
                </div>

                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">Google Analytics 4 (GA4) Certified</span>
                </div>

                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">Conversion Rate Optimization (CRO) Fundamentals</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
