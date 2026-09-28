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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-premium-900 font-bold text-lg leading-none">D</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white">הסוכנות<span className="text-gray-500">.</span></span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">עבודות נבחרות</a>
            <a href="#expertise" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">תחומי התמחות</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">עלינו</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-medium text-premium-900 bg-white hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10">
              בואו נדבר
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-premium-900 border-t border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">עבודות נבחרות</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">תחומי התמחות</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">עלינו</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-center rounded-full text-base font-medium text-premium-900 bg-white">בואו נדבר</a>
          </div>
        </div>
      )}
    </header>
  );
}
