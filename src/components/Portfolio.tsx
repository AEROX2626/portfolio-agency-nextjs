"use client";

import { useState } from 'react';
import ProjectCards from './ProjectCards';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projectData } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [modalData, setModalData] = useState<any>(null);

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'ecommerce', label: 'איקומרס' },
    { id: 'corporate', label: 'תדמית ו-B2B' },
    { id: 'app', label: 'אפליקציות ומערכות' },
  ];

  return (
    <section id="portfolio" className="py-32 bg-black min-h-screen relative z-10">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-premium-gold/10 border border-premium-gold/20 text-premium-gold text-sm font-bold tracking-widest mb-6 font-sans">
            התיק עבודות שלנו
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-sans tracking-tight">פרויקטים נבחרים</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium font-sans">
            הצצה לחלק מהפרויקטים שהובלנו לאחרונה. מסטארט-אפים בצמיחה ועד למותגי ריטייל מובילים.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map(f => (
            <button 
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all font-sans \${
                filter === f.id 
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCards onOpenModal={setModalData} filter={filter} />
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md" 
            dir="rtl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#111] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setModalData(null)}
                className="absolute top-4 left-4 md:top-6 md:left-6 z-50 p-2.5 bg-black/50 hover:bg-black text-white rounded-full transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image/Visual Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-900 overflow-hidden">
                {modalData.imgSrc ? (
                  <img src={modalData.imgSrc} alt={modalData.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <span className="text-gray-700 text-6xl font-black opacity-30 font-sans">UI</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 right-6 left-6">
                  <span className="text-premium-gold text-xs font-bold tracking-widest uppercase mb-2 block font-sans">{modalData.subCategory}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white font-sans">{modalData.title}</h3>
                </div>
              </div>

              {/* Modal Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                {projectData[modalData.category as keyof typeof projectData] ? (
                  <>
                    <div className="mb-10">
                      <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3 font-sans">
                        <span className="w-8 h-[2px] bg-premium-gold"></span> האתגר
                      </h4>
                      <p className="text-gray-400 leading-relaxed font-sans font-medium text-lg">
                        {projectData[modalData.category as keyof typeof projectData].challenge}
                      </p>
                    </div>
                    
                    <div className="mb-10">
                      <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3 font-sans">
                        <span className="w-8 h-[2px] bg-white"></span> הפתרון
                      </h4>
                      <p className="text-gray-400 leading-relaxed font-sans font-medium text-lg">
                        {projectData[modalData.category as keyof typeof projectData].solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                      <div>
                        <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 font-sans">
                          {projectData[modalData.category as keyof typeof projectData].stat1Label}
                        </span>
                        <span className="block text-3xl font-black text-white font-sans">
                          {projectData[modalData.category as keyof typeof projectData].stat1}
                        </span>
                      </div>
                      <div>
                        <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-2 font-sans">מהירות טעינה</span>
                        <span className="block text-3xl font-black text-white font-sans">
                          {projectData[modalData.category as keyof typeof projectData].stat2}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 font-sans">טוען נתונים...</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
