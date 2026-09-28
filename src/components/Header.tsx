"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-premium-900 font-bold text-lg leading-none">D</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white">הסוכנות<span className="text-gray-500">.</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">תיק עבודות</a>
            <a href="#expertise" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">התמחות</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">אודות</a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-medium text-premium-900 bg-white hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10">
              צור קשר
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-premium-900 border-b border-gray-800 p-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">תיק עבודות</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">התמחות</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">אודות</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-center rounded-full text-base font-medium text-premium-900 bg-white">צור קשר</a>
          </div>
        </div>
      )}
    </header>
  );
}
