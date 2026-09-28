"use client";

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "עיצוב שמשאיר חותם",
      desc: "אפיון ועיצוב חווית משתמש (UI/UX) מוקפדת שמבדלת אותך מהמתחרים ומייצרת חיבור אמוציונלי עם הלקוח.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    },
    {
      title: "פיתוח וטכנולוגיית קצה",
      desc: "קוד נקי, סביבות פיתוח מתקדמות ואופטימיזציה למהירות חסרת פשרות שגוגל והגולשים אוהבים.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    },
    {
      title: "מיקוד בהמרות (CRO)",
      desc: "ארכיטקטורת מידע חכמה והנעות לפעולה (CTA) מדויקות שהופכות כניסות ללידים ולמכירות בפועל.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    }
  ];

  return (
    <section id="expertise" className="pb-24 bg-premium-800/30">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-premium-800/50 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
