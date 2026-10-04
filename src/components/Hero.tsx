"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-r from-premium-gold/10 to-premium-800/20 rounded-full blur-3xl opacity-50 mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-l from-blue-900/20 to-purple-900/10 rounded-full blur-3xl opacity-50 mix-blend-screen"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] font-sans">
              <span className="w-2 h-2 rounded-full bg-premium-gold animate-pulse"></span>
              סוכנות פרימיום לחוויות דיגיטליות
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[1.1] mb-8 font-sans"
          >
            יוצרים דיגיטל<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              שמותיר חותם.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-medium font-sans text-balance"
          >
            אנו מתכננים, מעצבים ומפתחים פלטפורמות ווב ברמה הגבוהה ביותר למותגים שדורשים שלמות.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6 items-center"
          >
            <a href="#portfolio" className="group relative px-8 py-4 bg-white text-black font-black text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] font-sans w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">צפה בעבודות שלנו</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 rounded-full shadow-sm text-lg font-bold text-white hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto font-sans backdrop-blur-sm">
              בואו נדבר
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
