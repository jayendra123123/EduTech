import React, { useState } from 'react';

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="text-xl font-bold tracking-widest">EduTech</div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-sm text-white/90 hover:text-white transition-colors tracking-wide">HOME</a>
            <a href="#companyhub" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">COMPANYHUB</a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">CONTACT</a>
          </div>
          <div className="md:hidden">
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(o => !o)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 transition-transform ${open ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`md:hidden bg-black/90 border-t border-white/5 overflow-hidden transition-max-h duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 space-y-3">
          <a href="#home" onClick={() => setOpen(false)} className="block text-base text-white/90 hover:text-white">Home</a>
          <a href="#companyhub" onClick={() => setOpen(false)} className="block text-base text-white/90 hover:text-white">CompanyHub</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-base text-white/90 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
