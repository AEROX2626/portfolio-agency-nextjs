"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full bg-gradient-to-b from-premium-800/20 to-transparent blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-bold tracking-widest mb-8 font-sans border border-white/10">
            השלב הבא
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-sans tracking-tight leading-tight">מוכנים לצאת לדרך?</h2>
          <p className="text-xl text-gray-400 mb-12 font-medium font-sans max-w-2xl mx-auto">
            השאירו פנייה ונחזור אליכם לשיחת היכרות ואפיון ראשוני ללא התחייבות. בואו נהפוך חזון למציאות דיגיטלית עוצרת נשימה.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:contact@agency.com" className="group relative px-10 py-5 bg-white text-black font-black text-lg rounded-full overflow-hidden shadow-xl font-sans hover:scale-105 active:scale-95 transition-all">
              <span className="relative z-10">שלחו לנו הודעה</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
