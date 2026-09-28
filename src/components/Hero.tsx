"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center text-balance">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium mb-6">
            סוכנות בוטיק דיגיטלית
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            יוצרים נוכחות דיגיטלית<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-300 to-gray-500">שבלתי אפשרי להתעלם ממנה.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
            עיצוב, פיתוח וחדשנות למותגים שרוצים להוביל את השוק. אנחנו הופכים רעיונות מורכבים לחוויות משתמש פשוטות, יפהפיות וממירות.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a href="#portfolio" className="px-8 py-4 border border-transparent rounded-full shadow-sm text-base font-medium text-premium-900 bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto">
              צפו בעבודות שלנו
            </a>
            <a href="#contact" className="px-8 py-4 border border-gray-600 rounded-full shadow-sm text-base font-medium text-white hover:bg-gray-800 hover:border-gray-500 transition-colors w-full sm:w-auto">
              צור קשר
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
