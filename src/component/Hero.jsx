import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SearchSection from './SearchSection';
import ContactSection from './ContactSection';

export default function Hero({ searchQuery, setSearchQuery, selectedIndustry, setSelectedIndustry, industries }) {
  return (
    <div id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-40 left-20 w-32 h-32 border border-white/5 rounded-full"></div>
      <div className="absolute top-60 right-32 w-24 h-24 border border-white/5 rounded-full"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tight">COMPANY<br />DIRECTORY</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">Hi, we're the leading platform connecting you with industry leaders and innovative companies worldwide.</p>
          <a href="#contact">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded tracking-wide transition-all inline-flex items-center gap-2 group">
              Get In touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-6 mb-10">
          <div className="w-full max-w-3xl">
            <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedIndustry={selectedIndustry} setSelectedIndustry={setSelectedIndustry} industries={industries} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 text-white/40 text-sm tracking-widest mb-20">
          <div>PHOENIX</div>
          <div>SWISS</div>
          <div>BRISTOL</div>
          <div>LEAFS</div>
          <div>GREENISH</div>
          <div>ITALIA</div>
        </div>
      </div>
    </div>
  );
}
