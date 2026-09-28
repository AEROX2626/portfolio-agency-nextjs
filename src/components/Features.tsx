"use client";

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: "עיצוב שמכתיב טרנדים",
      desc: "אפיון מבוסס מחקר ועיצוב UI/UX עוצר נשימה שמעביר את ערכי המותג שלך, מבדל אותך מהמתחרים ומייצר חיבור אמוציונלי מיידי.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "טכנולוגיית קצה וביצועים",
      desc: "פיתוח בארכיטקטורות המודרניות ביותר (React, Next.js). קוד נקי, סביבות מבוזרות ואופטימיזציה לזמני טעינה אפסיים שגוגל פשוט אוהב.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "מכונות להמרת לידים",
      desc: "אנחנו לא בונים אתרים יפים שעומדים ריקים. הארכיטקטורה שלנו מוכוונת המרות (CRO) עם הנעות לפעולה מדויקות שהופכות כניסות למכירות.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black text-white mb-6 font-sans tracking-tight"
          >
            לא רק יפה, אלא <span className="text-transparent bg-clip-text bg-gradient-to-l from-premium-gold to-yellow-200">חכם ועוצמתי</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-medium font-sans"
          >
            אנו משלבים אסתטיקה ברמה עולמית עם טכנולוגיה חסרת פשרות כדי לספק פתרון הוליסטי.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-[1px] rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br \${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col items-start overflow-hidden">
                {/* Subtle glow behind icon */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br \${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>

                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 font-sans tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed font-sans font-medium group-hover:text-gray-300 transition-colors">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
