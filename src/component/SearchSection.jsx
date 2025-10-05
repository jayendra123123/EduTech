import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function SearchSection({ searchQuery, setSearchQuery, selectedIndustry, setSelectedIndustry, industries }) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-orange-600/50 transition-colors"
            />
          </div>
          <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                selectedIndustry === industry
                  ? 'bg-orange-600 text-white'
                  : 'bg-zinc-800 text-white/60 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
