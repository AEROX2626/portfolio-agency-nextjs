"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-premium-900 to-black relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">מוכנים לצאת לדרך?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">בואו נדבר על הפרויקט הבא שלכם ונהפוך חזון למציאות דיגיטלית.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@agency.com" className="px-8 py-4 border border-transparent rounded-full shadow-sm text-base font-bold text-premium-900 bg-white hover:bg-gray-100 transition-transform hover:scale-105">
              שלחו לנו הודעה
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
