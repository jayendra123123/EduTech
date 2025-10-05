import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import CompaniesGrid from './CompaniesGrid';
import SearchSection from './SearchSection';
import Stats from './Stats';
import ContactSection from './ContactSection';
import Footer from './Footer';
import mockCompanies from '../data/mockCompanies';

const FancyCompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Enable smooth scrolling for in-page anchors
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = prev || '';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCompanies(mockCompanies);
      setFilteredCompanies(mockCompanies);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = companies;

    if (searchQuery) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedIndustry !== 'All') {
      result = result.filter(company => company.industry === selectedIndustry);
    }

    setFilteredCompanies(result);
  }, [searchQuery, selectedIndustry, companies]);

  const industries = ['All', ...new Set(companies.map(c => c.industry))];

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav scrolled={scrolled} />
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedIndustry={selectedIndustry} setSelectedIndustry={setSelectedIndustry} industries={industries} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h2 id="companyhub" className="text-4xl md:text-5xl font-bold tracking-tight">FEATURED COMPANIES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <CompaniesGrid companies={filteredCompanies} loading={loading} />
      </div>

      <Stats companies={filteredCompanies} industries={industries} />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default FancyCompanyShowcase;
