import React from 'react';

export default function Stats({ companies, industries }) {
  return (
    <div className="border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: companies.length, label: 'COMPANIES' },
            { value: industries.length - 1, label: 'INDUSTRIES' },
            { value: '50K+', label: 'EMPLOYEES' },
            { value: '4.8', label: 'AVG RATING' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold mb-2 text-orange-600">{stat.value}</div>
              <div className="text-sm text-white/40 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
