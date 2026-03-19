import React from 'react';
import Image from 'next/image';

export default function ZeeshanPortfolio() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text) */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
              Zeeshan Ali
            </h1>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400 mt-2">
              Founder | Performance Marketing Expert | Digital Marketing Expert
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              With over 5 years of specialized experience in performance marketing and automation, I engineer measurable, revenue-driven growth for brands. By combining aggressive, data-driven Meta and Google Ads strategies with high-converting GoHighLevel (GHL) automation funnels, I consistently manage large-scale ad spends exceeding $150,000/month. My ultimate focus is on lowering acquisition costs, scaling your ROI, and building seamless digital ecosystems that reliably turn clicks into loyal customers.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl relative">
            <Image 
              src="/image11.jpeg" 
              alt="Zeeshan Ali - Performance Marketing Expert" 
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
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Paid Media & Scaling</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Meta & Google Ads Manager
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                GA4 & Conversion Tracking
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                A/B Testing & CRO
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Web Engineering</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Shopify (Liquid) & WordPress (PHP)
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                React, HTML5, Tailwind CSS
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                UI/UX Design (Figma)
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Marketing Automation</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                GoHighLevel CRM Architect
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Zapier & HubSpot Integrations
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Custom Funnel Logic
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-xl font-bold text-teal-600 group-hover:text-teal-800 transition-colors mb-4">Project Management</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                Agile / Scrum Methodologies
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                SDLC & Resource Planning
              </li>
              <li className="flex items-start gap-2 text-gray-600 font-medium group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 group-hover:bg-cyan-500 transition-colors flex-shrink-0"></span>
                ClickUp & Monday.com
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
                <span className="text-sm font-semibold text-teal-600 mb-1">2022 - Present</span>
                <h4 className="text-xl font-bold text-gray-900">SEO Team Lead</h4>
                <span className="text-md font-medium text-gray-500">@ Nitro 9</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Directed cross-functional teams of developers and marketers, optimizing delivery workflows by 25% using ClickUp, and scaling SEO operations for maximum organic revenue.
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
                <h4 className="text-xl font-bold text-gray-900">Performance Marketing Specialist</h4>
                <span className="text-md font-medium text-gray-500">@ CMG & Kennards Media Buyer Rozi</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Managed $150,000+/month ad budgets across Meta and Google, implementing advanced remarketing funnels that improved conversions by 40%.
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
                <h4 className="text-xl font-bold text-gray-900">Marketing Automation Expert</h4>
                <span className="text-md font-medium text-gray-500">@ Launchify LLC</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Architected complete automation strategies using GoHighLevel CRM, improving conversion rates by over 25% through precision targeting and dynamic workflows.
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
                <h4 className="font-bold text-gray-900 text-lg">Bachelor of Science in Software Engineering</h4>
                <p className="text-teal-600 font-medium mt-1">COMSATS University Islamabad</p>
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
                  <span className="font-medium text-gray-700">Google Ads Search & GA4 Certified</span>
                </div>

                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">GoHighLevel Official Agency Certification</span>
                </div>

                <div className="flex items-center bg-white px-5 py-3 rounded-full shadow-sm border border-teal-100 group hover:border-teal-300 transition-colors">
                  <svg className="w-5 h-5 text-teal-500 mr-2 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="font-medium text-gray-700">HubSpot CRM & Sales Software Certified</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
