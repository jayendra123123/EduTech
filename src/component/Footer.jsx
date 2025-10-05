import React from 'react';

export default function Footer() {
  return (
    <div className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/40">© 2025 NOIR. All rights reserved.</div>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="https://github.com/jayendra123123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/jayendra-malla-1a77b6256/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://jayendra-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}
