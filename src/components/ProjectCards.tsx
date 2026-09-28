"use client";

const projects = [
  {
    id: 1, category: 'ecommerce', domain: 'lumahome.co.il', subCategory: 'איקומרס / ריהוט הבית', title: 'LUMA - עיצוב חללים',
    desc: 'חנות סחר אלקטרוני מתקדמת למותג ריהוט יוקרתי, הכוללת קטלוג חכם, סינון מתקדם וממשק משתמש אלגנטי וחלק.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    type: 'ecommerce',
    ui: { logo: 'לומה.', nav: ['סלון', 'חדר שינה', 'אקססוריז'], subtitle: 'קולקציית אביב 2024', headline: 'ריהוט שמרגיש<br/>כמו בית.', btn: 'צפייה בקולקציה' }
  },
  {
    id: 2, category: 'corporate', domain: 'desert-rose.co.il', subCategory: 'תדמית ו-B2B / תיירות', title: 'Desert Rose Resort',
    desc: 'אתר תדמית ומערכת הזמנות מתקדמת למלון בוטיק מדברי. חווית משתמש מרגיעה המשדרת יוקרה ונופש אקסקלוסיבי.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    type: 'booking',
    ui: { logo: 'ורד המדבר', headline: 'חופשה במדבר', checkin: "12 אוק' - 14 אוק'", guests: '2 מבוגרים', btn: 'חפש' }
  },
  {
    id: 3, category: 'app', domain: 'app.nexadata.co.il', subCategory: 'אפליקציות ומערכות / SaaS', title: 'NexaData Platform',
    desc: 'עיצוב ממשק משתמש (UI/UX) מורכב למערכת ניהול נתונים בענן עבור חברת סטארט-אפ בצמיחה, כולל דשבורדים דינמיים.',
    type: 'dashboard',
    ui: { logo: 'נקסה-דאטה', nav: ['דשבורד', 'משתמשים', 'דוחות'], title: 'סקירה כללית', stat1Title: 'סה"כ הכנסות', stat1Value: '₪42,500', stat2Title: 'משתמשים פעילים', stat2Value: '1,204' }
  },
  {
    id: 4, category: 'corporate', domain: 'oak-restaurant.co.il', subCategory: 'תדמית ו-B2B / קולינריה', title: 'OAK מסעדת שף',
    desc: 'אתר תדמית מינימליסטי המעביר את החוויה הקולינרית אל המסך, עם ארכיטקטורת תוכן חכמה וחיבור למערכת הזמנת מקומות.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    type: 'minimal',
    ui: { logo: 'O A K', subtitle: 'מסעדת שף בתל אביב', headline: 'חוויה קולינרית<br/>בלתי נשכחת.', btn1: 'הזמנת שולחן', btn2: 'לתפריט' }
  },
  {
    id: 5, category: 'ecommerce', domain: 'noir-apparel.co.il', subCategory: 'איקומרס / אופנה', title: 'NOIR - אופנת עילית',
    desc: 'חנות וירטואלית רספונסיבית במיוחד למותג אופנה, מתמקדת בביצועים מהירים, הגדלת המרות ובחוויית קנייה חלקה במובייל.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    type: 'ecommerce_light',
    ui: { logo: 'NOIR.', nav: ['נשים', 'גברים', 'אקססוריז'], headline: 'קולקציית<br/>סתיו 24', btn: 'לקנייה' }
  },
  {
    id: 6, category: 'app', domain: 'zen-booking.co.il', subCategory: 'אפליקציות ומערכות / שירותים', title: 'ZEN - מערכת סטודיו',
    desc: 'אפליקציית ווב מתקדמת לניהול מערכת שעות והזמנת שיעורים עבור רשת מכוני יוגה ופילאטיס. חוויה מהירה ואינטואיטיבית.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    type: 'mobile',
    ui: { logo: 'ZEN.', title1: 'ויניאסה יוגה', time1: '08:00 • סטודיו מרכזי', title2: 'פילאטיס מכשירים', time2: '10:30 • חדר פרטי' }
  },
  {
    id: 7, category: 'corporate', domain: 'vista-properties.co.il', subCategory: 'תדמית ו-B2B / נדל"ן יוקרה', title: 'VISTA - שיווק נדל"ן',
    desc: 'אתר קטלוגי המציג פרויקטים של נדל"ן יוקרה בישראל, מבוסס על ויזואליה חזקה ומערכת סינון נכסים מותאמת אישית.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    type: 'search',
    ui: { logo: 'VISTA.', searchHint: 'חפש עיר, שכונה או פרויקט...', filter: 'דירות למכירה', btn: 'חיפוש נכסים' }
  },
  {
    id: 8, category: 'ecommerce', domain: 'aura-audio.co.il', subCategory: 'איקומרס / סאונד וטכנולוגיה', title: 'AURA Audio',
    desc: 'חנות אונליין לאוזניות פרימיום ציוד שמע. בנינו ממשק 3D אינטראקטיבי המאפשר לסובב ולבחון את המוצר מכל זווית לפני הרכישה.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    type: 'product',
    ui: { logo: 'AURA', product: 'Aura One Pro', desc: 'אוזניות פרימיום עם סינון רעשים אקטיבי.', price: '₪1,299', btn: 'הוסף לסל' }
  },
  {
    id: 9, category: 'app', domain: 'app.payflow.co.il', subCategory: 'אפליקציות ומערכות / פינטק', title: 'PayFlow - ארנק דיגיטלי',
    desc: 'עיצוב ופיתוח אפליקציית ווב פיננסית להעברת כספים בינלאומית, עם דגש על אבטחת מידע קפדנית וממשק ידידותי למשתמש.',
    type: 'wallet',
    ui: { name: 'ישראל ישראלי', balance: '₪12,450.00', btn1: 'הפקדה', btn2: 'העברה', trans1: 'אמזון ישראל', amt1: '-₪342.00', trans2: 'העברה מרועי', amt2: '+₪150.00' }
  },
  {
    id: 10, category: 'corporate', domain: 'sterling-law.co.il', subCategory: 'תדמית ו-B2B / עריכת דין', title: 'Sterling & Co',
    desc: 'אתר תדמית סמכותי ומרשים למשרד עורכי דין בינלאומי. ארכיטקטורת האתר מדגישה את מומחיות המשרד ואת הצוות המשפטי.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    type: 'hero',
    ui: { logo: "סטרלינג ושות'", subtitle: 'מצוינות משפטית מ-1998', headline: 'מובילים בייצוג מסחרי<br/>וליטיגציה מורכבת.', btn: 'קבע פגישת ייעוץ' }
  },
  {
    id: 11, category: 'ecommerce', domain: 'glow-botanicals.co.il', subCategory: 'איקומרס / ביוטי וקוסמטיקה', title: 'Glow Botanicals',
    desc: 'אתר איקומרס למותג קוסמטיקה טבעית. עיצוב נקי ורך המעביר את ערכי המותג, עם תהליך צ\'קאאוט פשוט וממיר במיוחד.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    type: 'product_card',
    ui: { logo: 'GLOW.', badge: '100% טבעי', product: 'סרום ויטמין C', desc: 'מעניק לחות עמוקה וזוהר טבעי לעור הפנים.', price: '₪149', btn: 'הוסף' }
  },
  {
    id: 12, category: 'app', domain: 'app.pulse-fitness.co.il', subCategory: 'אפליקציות ומערכות / כושר', title: 'PULSE - מעקב אימונים',
    desc: 'מערכת SaaS למאמני כושר לניהול מתאמנים, תוכניות אימון ומעקב התקדמות בזמן אמת. ממשק אנרגטי ומניע לפעולה.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    type: 'watch',
    ui: { title: 'אימון כוח', bpm: '142', cal: '340', time: '42:10' }
  },
  {
    id: 13, category: 'corporate', domain: 'studiok-arch.co.il', subCategory: 'תדמית ו-B2B / אדריכלות', title: 'Studio K',
    desc: 'תיק עבודות דיגיטלי למשרד אדריכלים בינלאומי. עיצוב מינימליסטי השם את התמונות במרכז באמצעות תצוגת מסך מלא.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    type: 'minimal_hero',
    ui: { logo: 'STUDIO K.', subtitle: 'פרויקט נבחר / תל אביב', headline: 'מגדל רוטשילד 22' }
  },
  {
    id: 14, category: 'ecommerce', domain: 'lumiere.co.il', subCategory: 'איקומרס / תכשיטי יוקרה', title: 'LUMIÈRE',
    desc: 'פלטפורמת מסחר יוקרתית למותג תכשיטים, משלבת חווית גלישה אקסקלוסיבית ופיצ\'ר של מדידת תכשיטים במציאות רבודה (AR).',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    type: 'hero_center',
    ui: { logo: 'LUMIÈRE', headline: 'קולקציית אבן ספיר', btn: 'למדידה ב-AR' }
  },
  {
    id: 15, category: 'app', domain: 'learn-elevate.co.il', subCategory: 'אפליקציות ומערכות / EdTech', title: 'Elevate - פלטפורמת למידה',
    desc: 'מערכת ניהול קורסים (LMS) מתקדמת המאפשרת למידה מקוונת חכמה, כולל אזור אישי לתלמיד, צפייה בוידאו אינטראקטיבי וניהול מטלות.',
    type: 'lms',
    ui: { logo: 'Elevate', subtitle: 'הקורס הנוכחי שלך', course: 'מבוא לפיתוח Full-Stack', prog: '65%', tag1: 'תכנות (12)', tag2: 'עיצוב UI/UX (8)' }
  },
  {
    id: 16, category: 'corporate', domain: 'apex-motors.co.il', subCategory: 'תדמית ו-B2B / רכבי יוקרה', title: 'Apex Motors',
    desc: 'אתר תדמית ולידים מרהיב לסוכנות יבוא רכבי יוקרה. חווית גלישה המשדרת עוצמה ומהירות, עם קונפיגורטור לבניית הרכב המושלם.',
    image: 'https://images.unsplash.com/photo-1503378462226-f39b4f49ae51?auto=format&fit=crop&w=800&q=80',
    type: 'car',
    ui: { car: 'GT-R 500', stat1: '3.2s', stat1L: '0-100 קמ"ש', stat2: '650', stat2L: 'כ"ס', btn: 'תיאום נסיעת מבחן' }
  },
  {
    id: 17, category: 'app', domain: 'app.techflow.io', subCategory: 'אפליקציות ומערכות / SaaS', title: 'TechFlow - ניהול פרויקטים',
    desc: 'מערכת ארגונית מתקדמת לניהול משימות ופרויקטים בארגונים גדולים. ממשק נקי ששם דגש על שיתופיות ויעילות צוותית.',
    type: 'dashboard',
    ui: { logo: 'TechFlow', nav: ['משימות', 'צוותים', 'לוח שנה'], title: 'התקדמות שבועית', stat1Title: 'משימות שהושלמו', stat1Value: '142', stat2Title: 'שעות פיתוח', stat2Value: '384' }
  },
  {
    id: 18, category: 'ecommerce', domain: 'greeneats.co.il', subCategory: 'איקומרס / מזון ומשקאות', title: 'GreenEats - משלוחי טבעונות',
    desc: 'אפליקציית משלוחים מתקדמת למסעדות טבעוניות, עם תהליך הזמנה מהיר, תמונות מגרות ותוכנית נאמנות למשתמשים.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    type: 'ecommerce_light',
    ui: { logo: 'GreenEats', nav: ['תפריט', 'מבצעים', 'סניפים'], headline: 'טרי, בריא<br/>ומגיע עד הבית.', btn: 'הזמן עכשיו' }
  },
  {
    id: 19, category: 'corporate', domain: 'skyline-arch.com', subCategory: 'תדמית ו-B2B / אדריכלות', title: 'Skyline Architecture',
    desc: 'אתר רשמי למשרד אדריכלות מוביל, עם פורטפוליו תמונות מסך מלא וחווית גלילה כובשת המציגה פרויקטים מורכבים.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    type: 'minimal_hero',
    ui: { logo: 'SKYLINE.', subtitle: 'עיצוב אורבני עכשווי', headline: 'מגדירים מחדש<br/>את קו הרקיע.' }
  },
  {
    id: 20, category: 'app', domain: 'wallet.coinbase-israel.co.il', subCategory: 'אפליקציות ומערכות / קריפטו', title: 'CryptoWallet Pro',
    desc: 'ארנק קריפטו ומערכת מסחר מתקדמת למשקיעים, עם גרפים בזמן אמת, אבטחה מירבית וממשק כהה מרשים למסחר רציף.',
    type: 'wallet',
    ui: { name: 'תיק השקעות', balance: '$45,230.50', btn1: 'קנייה', btn2: 'מכירה', trans1: 'Bitcoin (BTC)', amt1: '+2.4%', trans2: 'Ethereum (ETH)', amt2: '-0.8%' }
  },
  {
    id: 21, category: 'ecommerce', domain: 'urbanwear.co.il', subCategory: 'איקומרס / אופנת רחוב', title: 'UrbanWear - Streetwear',
    desc: 'חנות איקומרס ייחודית למותג אופנת רחוב עם שפה עיצובית נועזת, גרידים א-סימטריים וחווית קנייה תוססת.',
    image: 'https://images.unsplash.com/photo-1523398002811-999aa8095218?auto=format&fit=crop&w=800&q=80',
    type: 'hero',
    ui: { logo: 'URBAN', subtitle: 'DROP #04 OUT NOW', headline: 'לשבור את<br/>החוקים.', btn: 'קולקציה חדשה' }
  }
];

function RenderUI({ item }: { item: any }) {
  const { type, ui, image } = item;

  if (type === 'ecommerce') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
        <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/40">
          <div className="w-full px-4 py-3 flex justify-between items-center text-white border-b border-white/10">
            <div className="font-sans font-black text-lg tracking-wide">{ui.logo}</div>
            <div className="hidden sm:flex gap-4 text-[9px] font-bold tracking-wide">
              {ui.nav.map((n: string, i: number) => <span key={i} className="hover:text-gray-300 cursor-pointer">{n}</span>)}
            </div>
          </div>
          <div className="px-5 pb-6">
            <span className="text-white/80 text-[9px] font-bold tracking-widest uppercase mb-1 block">{ui.subtitle}</span>
            <h4 className="text-white text-3xl font-sans font-black mb-2 leading-none" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
            <button className="bg-white text-black text-[10px] font-bold px-4 py-2 mt-2 hover:bg-gray-100 transition-colors font-sans">{ui.btn}</button>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'booking') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
        <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/30">
          <div className="w-full px-5 py-3 flex justify-between items-center text-white">
            <div className="flex flex-col items-center">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest">{ui.logo}</span>
            </div>
          </div>
          <div className="text-center px-4 mb-2">
            <h4 className="text-white text-3xl font-sans font-bold tracking-wide drop-shadow-md">{ui.headline}</h4>
          </div>
          <div className="mx-4 mb-4 bg-white rounded-md flex p-1.5 shadow-lg border border-gray-200">
            <div className="flex-1 border-l border-gray-200 px-2 text-right">
              <span className="block text-gray-400 text-[7px] font-bold">צ'ק אין / אאוט</span>
              <span className="block text-gray-800 text-[9px] font-medium">{ui.checkin}</span>
            </div>
            <div className="flex-1 px-2 text-right">
              <span className="block text-gray-400 text-[7px] font-bold">אורחים</span>
              <span className="block text-gray-800 text-[9px] font-medium">{ui.guests}</span>
            </div>
            <button className="bg-[#8b7355] text-white text-[10px] px-3 py-1 rounded-sm font-bold hover:bg-[#7a654b]">{ui.btn}</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className={`w-full h-full relative overflow-hidden ${ui.theme === "emerald" ? "bg-[#18181b]" : "bg-[#0f172a]"} pt-8 flex`}>
        <div className={`w-1/4 h-full ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"} border-l border-gray-800 flex flex-col p-3 z-10`}>
          <div className="flex items-center gap-1.5 mb-4">
            <div className={`w-4 h-4 ${ui.theme === "emerald" ? "bg-emerald-500" : "bg-blue-500"} rounded-md`}></div>
            <span className="text-white text-[10px] font-bold">{ui.logo}</span>
          </div>
          <div className="space-y-1.5">
            {ui.nav.map((n: string, i: number) => (
              <div key={i} className={`${i === 0 ? (ui.theme === "emerald" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400") : "text-gray-400"} rounded p-1.5 flex items-center gap-2 text-[9px] font-bold`}>{n}</div>
            ))}
          </div>
        </div>
        <div className="flex-1 h-full p-4 relative z-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white font-bold text-xs">{ui.title}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className={`p-2 rounded-lg border border-gray-700/50 ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
              <span className="block text-gray-400 text-[8px] font-bold mb-1">{ui.stat1Title}</span>
              <span className="text-white text-sm font-bold">{ui.stat1Value}</span>
            </div>
            <div className={`p-2 rounded-lg border border-gray-700/50 ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
              <span className="block text-gray-400 text-[8px] font-bold mb-1">{ui.stat2Title}</span>
              <span className="text-white text-sm font-bold">{ui.stat2Value}</span>
            </div>
          </div>
          <div className={`p-2 rounded-lg border border-gray-700/50 h-[80px] flex items-end gap-1 px-3 ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
            <div className={`w-full h-1/3 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/20" : "bg-blue-500/20"}`}></div>
            <div className={`w-full h-2/3 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/40" : "bg-blue-500/40"}`}></div>
            <div className={`w-full h-1/2 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/60" : "bg-blue-500/60"}`}></div>
            <div className={`w-full h-[90%] rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500" : "bg-blue-500"}`}></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce_light') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white pt-8">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 object-top z-0"/>
        <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/10">
          <div className="w-full px-4 py-2.5 flex justify-between items-center text-black bg-white/90 backdrop-blur-md">
            <div className="font-sans font-black text-sm tracking-tighter">{ui.logo}</div>
            <div className="flex gap-3 text-[9px] font-bold">
              {ui.nav.map((n: string, i: number) => <span key={i} className="cursor-pointer">{n}</span>)}
            </div>
          </div>
          <div className="px-5 pb-6 text-center">
            <h4 className="text-white text-4xl font-sans font-bold tracking-tight drop-shadow-lg mb-3" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
            <button className="bg-black text-white text-[10px] font-bold tracking-wide px-6 py-2 shadow-xl hover:bg-white hover:text-black transition-colors">{ui.btn}</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'minimal' || type === 'hero') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8 flex flex-col">
        {image && <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>}
        <div className="relative z-10 w-full bg-[#1a2332]/90 backdrop-blur text-white flex justify-between items-center px-4 py-3 border-b border-white/10">
          <span className="font-sans text-[11px] font-bold tracking-wide">{ui.logo}</span>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 bg-black/40">
          <span className="text-gray-300 text-[8px] uppercase tracking-[0.2em] mb-2 border-b border-gray-400 pb-1 font-bold">{ui.subtitle}</span>
          <h4 className="text-white text-3xl font-sans font-bold leading-snug mb-4" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
          <button className="bg-[#c2a170] text-white text-[9px] font-bold px-5 py-2 hover:bg-[#a6885b] transition-colors">{ui.btn || ui.btn1}</button>
        </div>
      </div>
    );
  }

  if (type === 'hero_center') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#111] pt-8 flex flex-col items-center">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-50 z-0"/>
        <div className="relative z-10 w-full px-5 py-4 border-b border-[#d4af37]/20 flex justify-between items-center bg-black/30 backdrop-blur-sm">
          <h4 className="text-[#d4af37] text-lg font-sans font-bold tracking-widest">{ui.logo}</h4>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
          <h4 className="text-white text-2xl font-sans font-bold tracking-wide mb-4">{ui.headline}</h4>
          <div className="px-6 py-2 border border-[#d4af37] text-[#d4af37] text-[9px] uppercase font-bold tracking-widest cursor-pointer">{ui.btn}</div>
        </div>
      </div>
    );
  }

  if (type === 'minimal_hero') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white pt-8 flex flex-col">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 z-0"/>
        <div className="relative z-10 w-full flex justify-between px-6 py-4">
          <div className="text-white font-sans font-bold text-sm tracking-widest border-b-2 border-white pb-0.5">{ui.logo}</div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-end p-6">
          <span className="text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{ui.subtitle}</span>
          <h4 className="text-white text-3xl font-sans font-bold tracking-wide mb-4">{ui.headline}</h4>
        </div>
      </div>
    );
  }

  if (type === 'search') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8 flex flex-col justify-between">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
        <div className="relative z-10 w-full px-5 py-3 flex justify-between items-center text-white bg-gradient-to-b from-black/70 to-transparent">
          <div className="font-sans font-bold text-lg tracking-wide">{ui.logo}</div>
        </div>
        <div className="relative z-10 w-full px-4 mb-6">
          <div className="bg-white rounded-lg p-2 shadow-2xl flex flex-col gap-2">
            <div className="flex items-center bg-gray-50 rounded px-2 py-1.5 border border-gray-100">
              <span className="text-gray-400 text-[9px] font-bold">{ui.searchHint}</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 text-gray-600 text-[8px] font-bold py-1.5 rounded text-center border border-gray-100">{ui.filter}</div>
              <div className="flex-1 bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded text-center cursor-pointer">{ui.btn}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'product' || type === 'product_card') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black pt-8">
        {image && <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 z-0"/>}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <div className="text-white font-bold text-lg italic">{ui.logo}</div>
          </div>
          <div className="w-full max-w-[150px]">
            {ui.badge && <span className="bg-green-100 text-green-800 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase mb-1 inline-block">{ui.badge}</span>}
            <h4 className="text-white text-xl font-bold tracking-tight mb-1 leading-none">{ui.product}</h4>
            <p className="text-gray-400 text-[8px] mb-3 font-medium">{ui.desc}</p>
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10">
              <span className="text-white font-bold text-sm">{ui.price}</span>
              <button className="bg-white text-black text-[9px] font-bold px-3 py-1.5 rounded">{ui.btn}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile' || type === 'watch' || type === 'lms') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#faf9f7] pt-8 flex items-center justify-center">
        {image && <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-30 z-0"/>}
        <div className="relative z-10 w-[200px] h-[90%] bg-white rounded-[24px] shadow-2xl border-4 border-gray-100 overflow-hidden flex flex-col">
          <div className="px-3 pt-3 pb-2 flex justify-between items-center bg-white z-10">
            <div className="font-sans font-bold text-[11px] tracking-widest text-gray-800">{ui.logo || ui.title}</div>
          </div>
          <div className="flex-1 px-3 bg-gray-50/50 overflow-hidden">
            <div className="space-y-2 mt-2">
              {ui.title1 && (
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                  <div>
                    <div className="text-[9px] font-bold text-gray-800">{ui.title1}</div>
                    <div className="text-[7px] text-gray-400 font-bold">{ui.time1}</div>
                  </div>
                </div>
              )}
              {ui.title2 && (
                <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                  <div>
                    <div className="text-[9px] font-bold text-gray-800">{ui.title2}</div>
                    <div className="text-[7px] text-gray-400 font-bold">{ui.time2}</div>
                  </div>
                </div>
              )}
              {ui.course && (
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-3">
                  <span className="block text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-1">{ui.subtitle}</span>
                  <h4 className="text-gray-900 text-[11px] font-bold mb-2">{ui.course}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 text-[9px] font-bold">{ui.prog}</span>
                  </div>
                </div>
              )}
              {ui.bpm && (
                <div className="flex justify-between text-center border-t border-gray-100 pt-1 mt-1">
                  <div><span className="block text-black text-[9px] font-bold">{ui.cal}</span></div>
                  <div><span className="block text-black text-[9px] font-bold">{ui.time}</span></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'car') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black pt-8 flex flex-col justify-end">
        <img src={image} alt="Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-right">
          <h4 className="text-white text-4xl font-bold tracking-tight mb-2 italic uppercase">{ui.car}</h4>
          <div className="flex gap-4 mb-4 justify-start text-white">
            <div><span className="block text-red-500 text-[11px] font-bold">{ui.stat1}</span><span className="text-gray-400 text-[7px] font-bold uppercase tracking-wider">{ui.stat1L}</span></div>
            <div><span className="block text-red-500 text-[11px] font-bold">{ui.stat2}</span><span className="text-gray-400 text-[7px] font-bold uppercase tracking-wider">{ui.stat2L}</span></div>
          </div>
          <button className="bg-red-600 text-white text-[9px] font-bold px-5 py-2 uppercase tracking-widest hover:bg-red-700 transition-colors">{ui.btn}</button>
        </div>
      </div>
    );
  }
  
  if (type === 'wallet') {
    return (
      <div className={`w-full h-full relative overflow-hidden pt-8 p-4 flex flex-col ${ui.theme === "dark" ? "bg-[#111111]" : "bg-[#0a192f]"}`}>
        <div className="flex justify-between items-center mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <div>
              <span className="block text-white/60 text-[8px] font-bold">שלום,</span>
              <span className="block text-white text-[10px] font-bold">{ui.name}</span>
            </div>
          </div>
        </div>
        <div className={`relative z-10 w-full rounded-xl p-3 shadow-lg mb-3 border ${ui.theme === "dark" ? "bg-gradient-to-r from-purple-600 to-indigo-800 border-purple-500/30" : "bg-gradient-to-r from-blue-600 to-blue-800 border-blue-500/30"}`}>
          <span className="text-white/80 text-[9px] font-bold block mb-0.5">יתרה זמינה</span>
          <div className="text-white text-2xl font-light tracking-wide mb-3">{ui.balance}</div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white/20 text-white text-[8px] font-bold py-1.5 rounded">{ui.btn1}</button>
            <button className="flex-1 bg-white/20 text-white text-[8px] font-bold py-1.5 rounded">{ui.btn2}</button>
          </div>
        </div>
        <div className={`relative z-10 flex-1 rounded-xl p-3 border border-white/5 ${ui.theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#112240]"}`}>
          <span className="text-white text-[9px] font-bold block mb-2">פעולות אחרונות</span>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div><span className="block text-white text-[9px] font-bold">{ui.trans1}</span></div>
              <span className="text-white text-[9px] font-bold">{ui.amt1}</span>
            </div>
            <div className="flex justify-between items-center">
              <div><span className="block text-white text-[9px] font-bold">{ui.trans2}</span></div>
              <span className="text-green-400 text-[9px] font-bold">{ui.amt2}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}

export default function ProjectCards({ onOpenModal, filter }: { onOpenModal: (cardData: any) => void, filter: string }) {
  const filterClass = (cat: string) => filter === "all" || filter === cat ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95";
  return (
    <>
      {projects.map((item, idx) => (
        <div key={idx} className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass(item.category)} cursor-pointer`} 
             onClick={() => onOpenModal({ category: item.category, imgSrc: item.image, title: item.title, subCategory: item.subCategory })}>
          
          <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
              <span className="text-[10px] text-gray-300 font-sans tracking-wider font-bold">{item.domain}</span>
            </div>
          </div>

          <RenderUI item={item} />

          <div className="project-overlay opacity-0 group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
            <span className="text-xs font-bold text-premium-gold mb-3 tracking-widest uppercase">{item.subCategory}</span>
            <h3 className="text-2xl font-black text-white mb-3 font-sans">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans font-medium">{item.desc}</p>
            <span className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-transparent group-hover:border-premium-gold transition-colors pb-1 font-sans">
              צפה בתהליך הפיתוח
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
