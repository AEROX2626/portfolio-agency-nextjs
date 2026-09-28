"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCards from './ProjectCards';
import { projectData } from '@/data/projects';
import { X } from 'lucide-react';

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
    <>
      <section id="portfolio" className="py-24 bg-premium-800/30 border-y border-gray-800/50">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">עבודות נבחרות</h2>
              <p className="text-gray-400 max-w-xl text-lg">הצצה לפרויקטים האחרונים שלנו. כל אתר נבנה בקפידה, עם חשיבה על חווית משתמש, עיצוב עוצר נשימה והמרות גבוהות.</p>
            </motion.div>
            
            {/* Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 md:mt-0 flex flex-wrap gap-2"
            >
              {filters.map(f => (
                <button 
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                    filter === f.id 
                      ? 'bg-white text-premium-900 border-white' 
                      : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCards onOpenModal={setModalData} filter={filter} />
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" dir="rtl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalData(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-premium-900 border border-gray-700 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Image Side */}
              <div className="w-full md:w-5/12 h-48 md:h-auto bg-black relative flex-shrink-0 border-b md:border-b-0 md:border-l border-gray-800">
                <img src={modalData.imgSrc} className="w-full h-full object-cover opacity-80" alt="Project Mockup" />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-900 md:bg-gradient-to-r md:from-premium-900 via-transparent to-transparent"></div>
              </div>
              
              {/* Text Content Side */}
              <div className="w-full md:w-7/12 h-full overflow-y-auto p-8 md:p-12 scroll-smooth">
                <button onClick={() => setModalData(null)} className="absolute top-4 md:top-6 left-4 md:left-6 w-10 h-10 bg-gray-800/80 hover:bg-white hover:text-black rounded-full flex items-center justify-center text-gray-300 transition-colors z-10 border border-gray-700 hover:border-white">
                  <X className="w-5 h-5" />
                </button>
                
                <span className="text-premium-gold text-xs font-bold tracking-widest uppercase mb-3 block">{modalData.subCategory}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{modalData.title}</h2>
                
                {projectData[modalData.category as keyof typeof projectData] && (
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div> האתגר
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{projectData[modalData.category as keyof typeof projectData].challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div> הפתרון
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{projectData[modalData.category as keyof typeof projectData].solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                      <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50 flex flex-col justify-center items-start">
                        <span className="block text-gray-500 text-xs mb-1 uppercase tracking-wider font-medium">{projectData[modalData.category as keyof typeof projectData].stat1Label}</span>
                        <span className="text-white text-3xl font-light">{projectData[modalData.category as keyof typeof projectData].stat1}</span>
                      </div>
                      <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50 flex flex-col justify-center items-start">
                        <span className="block text-gray-500 text-xs mb-1 uppercase tracking-wider font-medium">זמן טעינה</span>
                        <span className="text-white text-3xl font-light">{projectData[modalData.category as keyof typeof projectData].stat2}</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-widest text-gray-500">טכנולוגיות בהן השתמשנו</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData[modalData.category as keyof typeof projectData].tech.map(t => (
                          <span key={t} className="px-4 py-1.5 bg-gray-800 text-gray-300 text-[11px] font-bold tracking-widest rounded-full border border-gray-700">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
