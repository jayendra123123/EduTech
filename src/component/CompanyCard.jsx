import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

export default function CompanyCard({ company, index }) {
  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-orange-600/50 transition-all duration-500 cursor-pointer overflow-hidden">
      <div className="absolute top-6 left-6 w-12 h-12 bg-orange-600 flex items-center justify-center text-sm font-bold">{String(index + 1).padStart(2,'0')}</div>
      <div className="absolute top-6 right-6 w-10 h-10 bg-zinc-800 flex items-center justify-center rounded group-hover:bg-orange-600 transition-colors"><ArrowUpRight className="w-5 h-5"/></div>
      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">{company.name.toUpperCase()}</h3>
        <p className="text-white/60 mb-6 leading-relaxed">{company.industry} leader with {company.employees.toLocaleString()} employees across multiple locations. Generating ${company.revenue} in annual revenue since {company.founded}.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div><div className="text-xs text-white/40 mb-1 tracking-wide">LOCATION</div><div className="text-sm text-white/80">{company.location}</div></div>
          <div><div className="text-xs text-white/40 mb-1 tracking-wide">INDUSTRY</div><div className="text-sm text-white/80">{company.industry}</div></div>
          <div><div className="text-xs text-white/40 mb-1 tracking-wide">EMPLOYEES</div><div className="text-sm text-white/80">{company.employees.toLocaleString()}</div></div>
          <div><div className="text-xs text-white/40 mb-1 tracking-wide">RATING</div><div className="text-sm text-white/80 flex items-center gap-1"><Star className="w-3 h-3 fill-orange-600 text-orange-600"/>{company.rating}</div></div>
        </div>
        <div className="flex items-center gap-3"><span className="px-3 py-1 bg-orange-600/20 text-orange-600 text-xs font-medium rounded border border-orange-600/30">{company.status}</span><span className="text-xs text-white/40">FOUNDED {company.founded}</span></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
