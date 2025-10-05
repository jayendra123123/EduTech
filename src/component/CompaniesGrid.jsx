import React from 'react';
import CompanyCard from './CompanyCard';
import { Building2 } from 'lucide-react';

export default function CompaniesGrid({ companies, loading }) {
  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1,2,3,4].map(i => <div key={i} className="h-96 bg-zinc-900 rounded animate-pulse"></div>)}
    </div>
  );

  if (!companies.length) return (
    <div className="text-center py-20"><Building2 className="w-16 h-16 text-white/20 mx-auto mb-4" /><h3 className="text-xl font-semibold text-white/60 mb-2">No Companies Found</h3><p className="text-white/40">Try adjusting your filters</p></div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {companies.map((c, idx) => <CompanyCard key={c.id} company={c} index={idx} />)}
    </div>
  );
}
