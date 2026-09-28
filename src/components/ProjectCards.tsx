"use client";

import { Search, ShoppingBag, Menu, User, Bell, PlayCircle, Grid, BarChart2, ChevronDown } from 'lucide-react';

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
    ui: { logo: 'נקסה-דאטה', nav: ['דשבורד', 'משתמשים', 'דוחות'], title: 'סקירה כללית', stat1Title: 'סה"כ הכנסות', stat1Value: '₪42,500', stat2Title: 'משתמשים פעילים', stat2Value: '1,204', theme: 'blue' }
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
    ui: { name: 'ישראל ישראלי', balance: '₪12,450.00', btn1: 'הפקדה', btn2: 'העברה', trans1: 'אמזון ישראל', amt1: '-₪342.00', trans2: 'העברה מרועי', amt2: '+₪150.00', theme: 'blue' }
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
    ui: { logo: 'TechFlow', nav: ['משימות', 'צוותים', 'לוח שנה'], title: 'התקדמות שבועית', stat1Title: 'משימות שהושלמו', stat1Value: '142', stat2Title: 'שעות פיתוח', stat2Value: '384', theme: 'emerald' }
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
    ui: { name: 'תיק השקעות', balance: '$45,230.50', btn1: 'קנייה', btn2: 'מכירה', trans1: 'Bitcoin (BTC)', amt1: '+2.4%', trans2: 'Ethereum (ETH)', amt2: '-0.8%', theme: 'dark' }
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
      <div className="w-full h-full relative overflow-hidden bg-[#fafafa] pt-8 flex flex-col group/ui">
        <div className="absolute top-8 left-0 w-full h-[calc(100%-2rem)] flex flex-col pointer-events-none">
          {/* Header */}
          <div className="w-full px-5 py-3 flex justify-between items-center text-black bg-white/90 backdrop-blur-md border-b border-gray-100 z-10 shadow-sm transition-transform duration-700 group-hover/ui:-translate-y-1">
            <div className="font-sans font-black text-sm tracking-widest">{ui.logo}</div>
            <div className="hidden sm:flex gap-4 text-[7px] font-bold tracking-wide uppercase text-gray-500">
              {ui.nav.map((n: string, i: number) => <span key={i}>{n}</span>)}
            </div>
            <div className="flex gap-2 text-gray-800">
              <Search className="w-2.5 h-2.5" strokeWidth={3} />
              <ShoppingBag className="w-2.5 h-2.5" strokeWidth={3} />
            </div>
          </div>
          {/* Hero Image Area */}
          <div className="relative flex-1 bg-gray-100 overflow-hidden">
            <img src={image} alt="Mockup" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover/ui:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10"></div>
            <div className="absolute bottom-6 left-5 text-white">
              <span className="text-[7px] font-bold tracking-widest uppercase mb-1 block opacity-80">{ui.subtitle}</span>
              <h4 className="text-2xl font-sans font-black leading-[1.1] mb-2 drop-shadow-lg" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
              <button className="bg-white text-black text-[7px] font-bold px-3 py-1.5 shadow-xl">{ui.btn}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'booking') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white pt-8 group/ui">
        <img src={image} alt="Mockup" className="absolute top-8 left-0 w-full h-[60%] object-cover transition-transform duration-[10s] group-hover/ui:scale-105 z-0"/>
        <div className="absolute top-8 left-0 w-full h-[60%] bg-black/20 z-0"></div>
        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="w-full px-5 py-3 flex justify-between items-center text-white">
            <Menu className="w-3 h-3 drop-shadow-md" />
            <span className="font-sans font-bold text-[9px] uppercase tracking-widest drop-shadow-md">{ui.logo}</span>
            <User className="w-3 h-3 drop-shadow-md" />
          </div>
          <div className="text-center px-4 mt-6">
            <h4 className="text-white text-2xl font-sans font-black tracking-wide drop-shadow-lg">{ui.headline}</h4>
          </div>
          <div className="mt-auto mb-4 mx-4 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 p-2 flex flex-col gap-2 transform transition-transform duration-500 group-hover/ui:-translate-y-2">
            <div className="flex bg-gray-50 rounded-lg p-1">
              <div className="flex-1 border-l border-gray-200 px-2 text-right">
                <span className="block text-gray-400 text-[6px] font-bold uppercase">צ'ק אין / אאוט</span>
                <span className="block text-gray-800 text-[8px] font-bold mt-0.5">{ui.checkin}</span>
              </div>
              <div className="flex-1 px-2 text-right">
                <span className="block text-gray-400 text-[6px] font-bold uppercase">אורחים</span>
                <span className="block text-gray-800 text-[8px] font-bold mt-0.5">{ui.guests}</span>
              </div>
            </div>
            <button className="w-full bg-[#111] text-white text-[9px] py-1.5 rounded-lg font-bold shadow-md">{ui.btn}</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    const isEmerald = ui.theme === 'emerald';
    return (
      <div className={`w-full h-full relative overflow-hidden ${isEmerald ? "bg-[#18181b]" : "bg-[#0f172a]"} pt-8 flex group/ui`}>
        {/* Sidebar */}
        <div className={`w-1/4 h-full ${isEmerald ? "bg-[#27272a]" : "bg-[#1e293b]"} border-l border-white/5 flex flex-col p-3 z-10 shadow-xl`}>
          <div className="flex items-center gap-1.5 mb-5">
            <div className={`w-3.5 h-3.5 ${isEmerald ? "bg-emerald-500" : "bg-blue-500"} rounded shadow-lg`}></div>
            <span className="text-white text-[9px] font-black tracking-wide">{ui.logo}</span>
          </div>
          <div className="space-y-1">
            {ui.nav.map((n: string, i: number) => (
              <div key={i} className={`${i === 0 ? (isEmerald ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400") : "text-gray-400"} rounded-md p-1.5 flex items-center gap-1.5 text-[7px] font-bold transition-colors`}>
                {i === 0 ? <Grid className="w-2 h-2" /> : <BarChart2 className="w-2 h-2 opacity-50" />}
                {n}
              </div>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 h-full p-4 relative z-10 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-bold text-[10px]">{ui.title}</span>
            <div className="flex gap-2">
              <Search className="w-2.5 h-2.5 text-gray-400" />
              <Bell className="w-2.5 h-2.5 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className={`p-2 rounded-lg border border-white/5 shadow-sm ${isEmerald ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
              <span className="block text-gray-400 text-[6px] font-bold uppercase tracking-wider mb-1">{ui.stat1Title}</span>
              <span className="text-white text-[11px] font-black">{ui.stat1Value}</span>
            </div>
            <div className={`p-2 rounded-lg border border-white/5 shadow-sm ${isEmerald ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
              <span className="block text-gray-400 text-[6px] font-bold uppercase tracking-wider mb-1">{ui.stat2Title}</span>
              <span className="text-white text-[11px] font-black">{ui.stat2Value}</span>
            </div>
          </div>
          <div className={`mt-auto p-2 rounded-xl border border-white/5 h-[70px] flex items-end gap-1.5 px-3 pb-2 relative overflow-hidden ${isEmerald ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-5 py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-full h-[1px] bg-white"></div>
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            <div className={`w-full h-[30%] rounded-t-sm relative z-10 transition-all duration-1000 group-hover/ui:h-[40%] ${isEmerald ? "bg-emerald-500/20" : "bg-blue-500/20"}`}></div>
            <div className={`w-full h-[60%] rounded-t-sm relative z-10 transition-all duration-1000 group-hover/ui:h-[70%] ${isEmerald ? "bg-emerald-500/40" : "bg-blue-500/40"}`}></div>
            <div className={`w-full h-[40%] rounded-t-sm relative z-10 transition-all duration-1000 group-hover/ui:h-[50%] ${isEmerald ? "bg-emerald-500/60" : "bg-blue-500/60"}`}></div>
            <div className={`w-full h-[90%] rounded-t-sm relative z-10 transition-all duration-1000 group-hover/ui:h-[100%] shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isEmerald ? "bg-emerald-500" : "bg-blue-500"}`}></div>
            <div className={`w-full h-[70%] rounded-t-sm relative z-10 transition-all duration-1000 group-hover/ui:h-[80%] ${isEmerald ? "bg-emerald-500/80" : "bg-blue-500/80"}`}></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce_light') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white pt-8 flex flex-col group/ui">
        <div className="w-full px-5 py-2.5 flex justify-between items-center text-black bg-white/90 backdrop-blur-md z-20 shadow-sm relative">
          <Menu className="w-2.5 h-2.5" />
          <div className="font-sans font-black text-[10px] tracking-widest uppercase">{ui.logo}</div>
          <ShoppingBag className="w-2.5 h-2.5" />
        </div>
        <div className="relative flex-1 overflow-hidden">
          <img src={image} alt="Mockup" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[15s] group-hover/ui:scale-110 group-hover/ui:translate-y-2 z-0"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10"></div>
          <div className="absolute bottom-5 left-0 w-full text-center z-20 px-4">
            <h4 className="text-white text-3xl font-sans font-black tracking-tight drop-shadow-xl mb-3 leading-none" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
            <button className="bg-white text-black text-[7px] font-bold tracking-widest uppercase px-5 py-2 shadow-2xl hover:bg-black hover:text-white transition-colors rounded-sm">{ui.btn}</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'minimal' || type === 'hero') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#0f0f0f] pt-8 flex flex-col group/ui">
        {image && <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover transition-transform duration-[10s] group-hover/ui:scale-110 opacity-70 z-0"/>}
        <div className="relative z-10 w-full bg-black/50 backdrop-blur-md text-white flex justify-between items-center px-5 py-3 border-b border-white/10">
          <Menu className="w-2.5 h-2.5 opacity-70" />
          <span className="font-sans text-[9px] font-black tracking-widest">{ui.logo}</span>
          <div className="w-2.5 h-2.5"></div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-black/20 to-black/80">
          <span className="text-premium-gold text-[6px] font-bold uppercase tracking-[0.3em] mb-2">{ui.subtitle}</span>
          <h4 className="text-white text-2xl font-sans font-black leading-tight mb-4 drop-shadow-2xl" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
          <button className="border border-white/30 text-white text-[7px] font-bold uppercase tracking-widest px-4 py-1.5 backdrop-blur-sm hover:bg-white hover:text-black transition-colors rounded-sm">{ui.btn || ui.btn1}</button>
        </div>
      </div>
    );
  }

  if (type === 'hero_center') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#111] pt-8 flex flex-col items-center group/ui">
        <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover transition-transform duration-[10s] group-hover/ui:scale-110 opacity-40 z-0"/>
        <div className="relative z-10 w-full px-5 py-3 border-b border-[#d4af37]/20 flex justify-between items-center bg-black/60 backdrop-blur-md">
          <Menu className="w-2.5 h-2.5 text-[#d4af37]" />
          <h4 className="text-[#d4af37] text-[10px] font-sans font-black tracking-widest">{ui.logo}</h4>
          <ShoppingBag className="w-2.5 h-2.5 text-[#d4af37]" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 w-full bg-gradient-to-t from-black/90 to-transparent">
          <h4 className="text-white text-xl font-sans font-black tracking-widest mb-4 drop-shadow-lg">{ui.headline}</h4>
          <div className="bg-[#d4af37] text-black text-[7px] font-bold uppercase tracking-[0.2em] px-5 py-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">{ui.btn}</div>
        </div>
      </div>
    );
  }

  if (type === 'minimal_hero') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-white pt-8 flex flex-col group/ui">
        <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover grayscale opacity-90 transition-all duration-[10s] group-hover/ui:scale-110 group-hover/ui:grayscale-0 z-0"/>
        <div className="relative z-10 w-full flex justify-between px-5 py-4 bg-gradient-to-b from-black/60 to-transparent">
          <div className="text-white font-sans font-black text-[9px] tracking-widest">{ui.logo}</div>
          <Menu className="w-2.5 h-2.5 text-white" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-end p-5 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
          <div className="border-l-2 border-white pl-3 transform transition-transform duration-500 group-hover/ui:translate-x-1">
            <span className="text-white/80 text-[6px] font-bold uppercase tracking-[0.2em] mb-0.5 block">{ui.subtitle}</span>
            <h4 className="text-white text-2xl font-sans font-black tracking-tight leading-none" dangerouslySetInnerHTML={{__html: ui.headline}}></h4>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'search') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8 flex flex-col justify-between group/ui">
        <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover transition-transform duration-[10s] group-hover/ui:scale-105 z-0"/>
        <div className="relative z-10 w-full px-5 py-3 flex justify-between items-center text-white bg-gradient-to-b from-black/80 to-transparent">
          <div className="font-sans font-black text-[10px] tracking-widest">{ui.logo}</div>
          <Menu className="w-2.5 h-2.5" />
        </div>
        <div className="relative z-10 w-full px-4 mb-5 transform transition-transform duration-500 group-hover/ui:-translate-y-1">
          <div className="bg-white rounded-xl p-2.5 shadow-2xl flex flex-col gap-2">
            <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5 border border-gray-100">
              <Search className="w-2.5 h-2.5 text-gray-400" />
              <span className="text-gray-400 text-[7px] font-bold">{ui.searchHint}</span>
            </div>
            <div className="flex gap-1.5">
              <div className="flex-1 bg-gray-50 text-gray-600 text-[6px] font-bold py-1.5 rounded-lg text-center border border-gray-100 uppercase">{ui.filter}</div>
              <div className="flex-1 bg-black text-white text-[6px] font-bold py-1.5 rounded-lg text-center uppercase shadow-md">{ui.btn}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'product' || type === 'product_card') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black pt-8 group/ui">
        {image && <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover opacity-50 transition-transform duration-[10s] group-hover/ui:scale-105 group-hover/ui:opacity-70 z-0"/>}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 bg-gradient-to-tr from-black/80 to-transparent">
          <div className="flex justify-between items-start">
            <div className="text-white font-black text-[10px] tracking-wider">{ui.logo}</div>
            <ShoppingBag className="w-2.5 h-2.5 text-white" />
          </div>
          <div className="w-full max-w-[150px] transform transition-transform duration-500 group-hover/ui:translate-x-1">
            {ui.badge && <span className="bg-white/20 backdrop-blur-sm text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full uppercase mb-1.5 inline-block border border-white/20">{ui.badge}</span>}
            <h4 className="text-white text-lg font-black tracking-tight mb-1 leading-none drop-shadow-md">{ui.product}</h4>
            <p className="text-gray-300 text-[6px] mb-3 font-medium leading-relaxed max-w-[120px]">{ui.desc}</p>
            <div className="flex items-center justify-between bg-black/40 backdrop-blur-md rounded-lg p-1.5 border border-white/10 shadow-lg">
              <span className="text-white font-bold text-[10px] pl-1">{ui.price}</span>
              <button className="bg-white text-black text-[6px] font-bold uppercase px-3 py-1.5 rounded-md shadow-sm">{ui.btn}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mobile' || type === 'watch' || type === 'lms') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#e5e5e5] pt-8 flex items-center justify-center group/ui">
        {image && <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover transition-transform duration-[15s] opacity-20 group-hover/ui:scale-110 z-0"/>}
        <div className="relative z-10 w-[140px] h-[85%] bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-[4px] border-gray-800 overflow-hidden flex flex-col transform transition-transform duration-700 group-hover/ui:-translate-y-2">
          {/* Mobile Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[10px] bg-gray-800 rounded-b-xl z-20"></div>
          
          <div className="px-3 pt-4 pb-2 flex justify-between items-center bg-white z-10 shadow-sm">
            <Menu className="w-2 h-2 text-gray-800" />
            <div className="font-sans font-black text-[7px] tracking-widest text-gray-900">{ui.logo || ui.title}</div>
            <User className="w-2 h-2 text-gray-800" />
          </div>
          <div className="flex-1 px-2.5 py-2 bg-gray-50 overflow-hidden flex flex-col gap-1.5">
            {ui.title1 && (
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                  <div className="text-[6px] font-black text-gray-900 mb-0.5">{ui.title1}</div>
                  <div className="text-[5px] text-gray-400 font-bold">{ui.time1}</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-50 flex items-center justify-center"><PlayCircle className="w-1.5 h-1.5 text-blue-500" /></div>
              </div>
            )}
            {ui.title2 && (
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                  <div className="text-[6px] font-black text-gray-900 mb-0.5">{ui.title2}</div>
                  <div className="text-[5px] text-gray-400 font-bold">{ui.time2}</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-blue-50 flex items-center justify-center"><PlayCircle className="w-1.5 h-1.5 text-blue-500" /></div>
              </div>
            )}
            {ui.course && (
              <div className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-100 mb-1">
                <span className="block text-gray-400 text-[5px] font-bold uppercase tracking-wider mb-1">{ui.subtitle}</span>
                <h4 className="text-gray-900 text-[7px] font-black mb-1.5 leading-tight">{ui.course}</h4>
                <div className="w-full bg-gray-100 h-[2px] rounded-full overflow-hidden mb-1">
                  <div className="bg-blue-500 h-full w-[65%]"></div>
                </div>
                <span className="text-blue-600 text-[5px] font-black">{ui.prog}</span>
              </div>
            )}
            {ui.bpm && (
              <div className="mt-auto bg-black text-white p-2 rounded-xl flex justify-between items-center">
                <div className="text-center">
                  <span className="block text-gray-400 text-[4px] uppercase mb-0.5">BPM</span>
                  <span className="block text-[8px] font-black text-red-500">{ui.bpm}</span>
                </div>
                <div className="text-center border-x border-gray-700 px-2">
                  <span className="block text-gray-400 text-[4px] uppercase mb-0.5">KCAL</span>
                  <span className="block text-[8px] font-black text-white">{ui.cal}</span>
                </div>
                <div className="text-center">
                  <span className="block text-gray-400 text-[4px] uppercase mb-0.5">TIME</span>
                  <span className="block text-[8px] font-black text-white">{ui.time}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'car') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black pt-8 flex flex-col justify-end group/ui">
        <img src={image} alt="Mockup" className="project-image absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover transition-transform duration-[10s] group-hover/ui:scale-105 z-0"/>
        <div className="absolute top-8 left-0 w-full p-4 flex justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
           <span className="text-white font-black text-[10px] tracking-widest uppercase">APEX</span>
           <Menu className="w-3 h-3 text-white" />
        </div>
        <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-right flex flex-col items-end">
          <h4 className="text-white text-3xl font-black tracking-tighter mb-3 italic uppercase drop-shadow-lg">{ui.car}</h4>
          <div className="flex gap-4 mb-4 justify-end text-white bg-white/5 backdrop-blur-md p-2 rounded-lg border border-white/10 w-full">
            <div className="flex-1 text-center border-l border-white/10">
              <span className="block text-red-500 text-[10px] font-black">{ui.stat1}</span>
              <span className="text-gray-400 text-[5px] font-bold uppercase tracking-wider">{ui.stat1L}</span>
            </div>
            <div className="flex-1 text-center">
              <span className="block text-white text-[10px] font-black">{ui.stat2}</span>
              <span className="text-gray-400 text-[5px] font-bold uppercase tracking-wider">{ui.stat2L}</span>
            </div>
          </div>
          <button className="bg-red-600 text-white text-[6px] font-black px-5 py-2 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(220,38,38,0.4)] rounded-sm w-full transition-transform hover:scale-105">{ui.btn}</button>
        </div>
      </div>
    );
  }
  
  if (type === 'wallet') {
    const isDark = ui.theme === 'dark';
    return (
      <div className={`w-full h-full relative overflow-hidden pt-8 p-4 flex flex-col group/ui ${isDark ? "bg-[#0a0a0a]" : "bg-[#0a192f]"}`}>
        <div className="flex justify-between items-center mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-gray-400 to-gray-200 shadow-inner flex items-center justify-center overflow-hidden">
               <User className="w-3 h-3 text-gray-500" />
            </div>
            <div>
              <span className="block text-white/50 text-[6px] font-bold uppercase tracking-wider mb-0.5">שלום,</span>
              <span className="block text-white text-[9px] font-black tracking-wide">{ui.name}</span>
            </div>
          </div>
          <Bell className="w-3 h-3 text-white/50" />
        </div>
        <div className={`relative z-10 w-full rounded-[14px] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.3)] mb-4 border transition-transform duration-500 group-hover/ui:scale-105 ${isDark ? "bg-gradient-to-br from-purple-600 via-indigo-700 to-indigo-900 border-purple-500/30" : "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 border-blue-400/30"}`}>
          {/* Card Chip */}
          <div className="w-4 h-3 bg-yellow-400/80 rounded-sm mb-3 opacity-80 mix-blend-overlay"></div>
          <span className="text-white/80 text-[6px] font-bold uppercase tracking-widest block mb-1">יתרה זמינה</span>
          <div className="text-white text-2xl font-light tracking-tight mb-4 drop-shadow-md">{ui.balance}</div>
          <div className="flex gap-2">
            <button className="flex-1 bg-white/20 backdrop-blur-md text-white text-[7px] font-black uppercase py-2 rounded-lg shadow-sm border border-white/10 hover:bg-white/30 transition-colors">{ui.btn1}</button>
            <button className="flex-1 bg-white/20 backdrop-blur-md text-white text-[7px] font-black uppercase py-2 rounded-lg shadow-sm border border-white/10 hover:bg-white/30 transition-colors">{ui.btn2}</button>
          </div>
        </div>
        <div className={`relative z-10 flex-1 rounded-t-[20px] -mx-4 -mb-4 p-5 pt-4 shadow-[0_-10px_20px_rgba(0,0,0,0.2)] border-t border-white/5 ${isDark ? "bg-[#111]" : "bg-[#112240]"}`}>
          <div className="flex justify-between items-center mb-4">
             <span className="text-white text-[8px] font-black uppercase tracking-wider">פעולות אחרונות</span>
             <span className="text-blue-400 text-[6px] font-bold uppercase tracking-wider cursor-pointer">הכל</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center group/trans cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}><ShoppingBag className="w-2.5 h-2.5" /></div>
                 <span className="block text-white text-[8px] font-bold transition-colors group-hover/trans:text-blue-400">{ui.trans1}</span>
              </div>
              <span className="text-white text-[9px] font-black tracking-wide">{ui.amt1}</span>
            </div>
            <div className="flex justify-between items-center group/trans cursor-pointer">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><ChevronDown className="w-3 h-3" /></div>
                 <span className="block text-white text-[8px] font-bold transition-colors group-hover/trans:text-blue-400">{ui.trans2}</span>
              </div>
              <span className="text-green-400 text-[9px] font-black tracking-wide">{ui.amt2}</span>
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
        <div key={idx} className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-[#1e1e1e] aspect-[4/3] border border-white/10 transition-all duration-300 ${filterClass(item.category)} cursor-pointer shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2`} 
             onClick={() => onOpenModal({ category: item.category, imgSrc: item.image, title: item.title, subCategory: item.subCategory })}>
          
          {/* macOS Safari Window Bar */}
          <div className="absolute top-0 w-full h-8 bg-[#2d2d2d] border-b border-[#1f1f1f] flex items-center px-3 gap-1.5 z-40 shadow-sm transition-transform duration-500 group-hover:-translate-y-full">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-1/2 max-w-[160px] h-5 bg-[#1a1a1a] rounded flex items-center justify-center gap-1.5 px-2 border border-white/5 shadow-inner">
              <svg className="w-2 h-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              <span className="text-[8px] text-gray-400 font-sans tracking-wide font-medium truncate">{item.domain}</span>
            </div>
          </div>

          <RenderUI item={item} />

          {/* Hover Overlay */}
          <div className="project-overlay opacity-0 group-hover:opacity-100 absolute inset-0 bg-premium-900/90 backdrop-blur-md transition-all duration-500 flex flex-col justify-center items-center p-8 text-center z-50">
            <span className="text-[10px] font-black text-premium-gold mb-3 tracking-[0.2em] uppercase border border-premium-gold/30 px-3 py-1 rounded-full">{item.subCategory}</span>
            <h3 className="text-3xl font-black text-white mb-4 font-sans leading-tight">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 font-sans font-medium max-w-sm">{item.desc}</p>
            <span className="inline-flex items-center gap-2 text-black bg-white px-6 py-3 rounded-full text-sm font-black transition-transform hover:scale-105 active:scale-95 shadow-xl font-sans">
              צפה במקרה הבוחן
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
