"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-full transition-all duration-500 border \${isScrolled ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3 px-6' : 'bg-transparent border-transparent py-4 px-4'}`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <span className="text-black font-black text-xl leading-none">D</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-sans hidden sm:block">הסוכנות<span className="text-premium-gold">.</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-bold font-sans">עבודות נבחרות</a>
              <a href="#expertise" className="text-gray-300 hover:text-white transition-colors text-sm font-bold font-sans">המומחיות שלנו</a>
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] text-sm font-bold text-black bg-white hover:bg-gray-100 hover:scale-105 transition-all font-sans">
                התחל פרויקט
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-[#111] border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl pointer-events-auto"
          >
            <div className="flex flex-col space-y-4 text-center">
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 font-sans">עבודות נבחרות</a>
              <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-xl text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 font-sans">המומחיות שלנו</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 mt-4 rounded-xl text-lg font-black text-black bg-white shadow-lg font-sans">התחל פרויקט</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
