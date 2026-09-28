export default function ProjectCards({ onOpenModal, filter }: { onOpenModal: (cardData: any) => void, filter: string }) {
  const filterClass = (cat: string) => filter === "all" || filter === cat ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95";
  return (<>

                    {/* Item 1: Furniture Ecommerce (LUMA) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("ecommerce")}`} data-category="ecommerce">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">lumahome.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Furniture Site Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            {/* Fake Website UI Overlay */}
                            <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/40">
                                {/* Fake Header */}
                                <div className="w-full px-4 py-3 flex justify-between items-center text-white border-b border-white/10">
                                    <div className="font-sans font-bold font-bold text-lg tracking-wide">לומה.</div>
                                    <div className="hidden sm:flex gap-4 text-[9px] font-medium tracking-wide">
                                        <span className="hover:text-gray-300 cursor-pointer">סלון</span>
                                        <span className="hover:text-gray-300 cursor-pointer">חדר שינה</span>
                                        <span className="hover:text-gray-300 cursor-pointer">אקססוריז</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </div>
                                </div>
                                {/* Fake Hero Content */}
                                <div className="px-5 pb-6">
                                    <span className="text-white/80 text-[9px] font-bold tracking-widest uppercase mb-1 block">קולקציית אביב 2024</span>
                                    <h4 className="text-white text-3xl font-sans font-bold mb-2 leading-none">ריהוט שמרגיש<br/>כמו בית.</h4>
                                    <button className="bg-white text-black text-[10px] font-bold px-4 py-2 mt-2 hover:bg-gray-100 transition-colors">צפייה בקולקציה</button>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">איקומרס / ריהוט הבית</span>
                            <h3 className="text-2xl font-bold text-white mb-3">LUMA - עיצוב חללים</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">חנות סחר אלקטרוני מתקדמת למותג ריהוט יוקרתי, הכוללת קטלוג חכם, סינון מתקדם וממשק משתמש אלגנטי וחלק.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 2: Boutique Hotel Corporate (Desert Rose) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">desert-rose.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8">
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" alt="Hotel Site Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            {/* Fake Website UI Overlay */}
                            <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/30">
                                {/* Fake Header */}
                                <div className="w-full px-5 py-3 flex justify-between items-center text-white">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 mb-0.5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                        <span className="font-sans font-bold text-[8px] uppercase tracking-widest">ורד המדבר</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-[1px] bg-white"></div>
                                        <div className="w-4 h-[1px] bg-white mt-1"></div>
                                    </div>
                                </div>
                                
                                <div className="text-center px-4 mb-2">
                                    <h4 className="text-white text-3xl font-sans font-bold tracking-wide drop-shadow-md">חופשה במדבר</h4>
                                </div>

                                {/* Fake Booking Bar */}
                                <div className="mx-4 mb-4 bg-white rounded-md flex p-1.5 shadow-lg border border-gray-200">
                                    <div className="flex-1 border-l border-gray-200 px-2 text-right">
                                        <span className="block text-gray-400 text-[7px] font-bold">צ'ק אין / אאוט</span>
                                        <span className="block text-gray-800 text-[9px] font-medium">12 אוק' - 14 אוק'</span>
                                    </div>
                                    <div className="flex-1 px-2 text-right">
                                        <span className="block text-gray-400 text-[7px] font-bold">אורחים</span>
                                        <span className="block text-gray-800 text-[9px] font-medium">2 מבוגרים</span>
                                    </div>
                                    <button className="bg-[#8b7355] text-white text-[10px] px-3 py-1 rounded-sm font-medium hover:bg-[#7a654b]">חפש</button>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / תיירות</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Desert Rose Resort</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר תדמית ומערכת הזמנות מתקדמת למלון בוטיק מדברי. חווית משתמש מרגיעה המשדרת יוקרה ונופש אקסקלוסיבי.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 3: Tech Platform App (NexaData) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("app")}`} data-category="app">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">app.nexadata.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-[#0f172a] pt-8 flex">
                            {/* Sidebar */}
                            <div className="w-1/4 h-full bg-[#1e293b] border-l border-gray-800 flex flex-col p-3 z-10">
                                <div className="flex items-center gap-1.5 mb-4">
                                    <div className="w-4 h-4 bg-blue-500 rounded-md"></div>
                                    <span className="text-white text-[10px] font-bold">נקסה-דאטה</span>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="bg-blue-500/10 text-blue-400 rounded p-1.5 flex items-center gap-2 text-[9px]"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> דשבורד</div>
                                    <div className="text-gray-400 rounded p-1.5 flex items-center gap-2 text-[9px]"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> משתמשים</div>
                                    <div className="text-gray-400 rounded p-1.5 flex items-center gap-2 text-[9px]"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> דוחות</div>
                                </div>
                            </div>
                            
                            {/* Main Area */}
                            <div className="flex-1 h-full p-4 relative z-10">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white font-bold text-xs">סקירה כללית</span>
                                    <div className="flex items-center gap-1 bg-[#1e293b] px-2 py-1 rounded text-[8px] text-gray-300">החודש האחרון <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="bg-[#1e293b] p-2 rounded-lg border border-gray-700/50">
                                        <span className="block text-gray-400 text-[8px] mb-1">סה"כ הכנסות</span>
                                        <span className="text-white text-sm font-bold">₪42,500</span>
                                        <span className="text-green-400 text-[7px] block mt-0.5">+12.5%</span>
                                    </div>
                                    <div className="bg-[#1e293b] p-2 rounded-lg border border-gray-700/50">
                                        <span className="block text-gray-400 text-[8px] mb-1">משתמשים פעילים</span>
                                        <span className="text-white text-sm font-bold">1,204</span>
                                        <span className="text-green-400 text-[7px] block mt-0.5">+5.2%</span>
                                    </div>
                                </div>
                                {/* Chart Area */}
                                <div className="bg-[#1e293b] p-2 rounded-lg border border-gray-700/50 h-[80px] flex items-end gap-1 px-3">
                                    {/* Bar chart mock */}
                                    <div className="w-full bg-blue-500/20 h-1/3 rounded-t-sm"></div>
                                    <div className="w-full bg-blue-500/40 h-2/3 rounded-t-sm"></div>
                                    <div className="w-full bg-blue-500/60 h-1/2 rounded-t-sm"></div>
                                    <div className="w-full bg-blue-500 h-[90%] rounded-t-sm relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px] bg-white text-black px-1 rounded">שיא</div></div>
                                    <div className="w-full bg-blue-500/80 h-3/4 rounded-t-sm"></div>
                                    <div className="w-full bg-blue-500/30 h-1/4 rounded-t-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">אפליקציות ומערכות / SaaS</span>
                            <h3 className="text-2xl font-bold text-white mb-3">NexaData Platform</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">עיצוב ממשק משתמש (UI/UX) מורכב למערכת ניהול נתונים בענן עבור חברת סטארט-אפ בצמיחה, כולל דשבורדים דינמיים.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 4: Fine Dining Corporate (OAK) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">oak-restaurant.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-gray-900 pt-8 flex">
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="Restaurant Site Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            {/* Fake Website UI Overlay */}
                            <div className="relative z-10 w-full h-full flex bg-black/60">
                                {/* Side Nav */}
                                <div className="w-12 h-full border-l border-white/20 flex flex-col items-center py-4 justify-between bg-black/40 backdrop-blur-sm">
                                    <div className="text-white font-sans font-bold font-bold text-sm">O<br/>A<br/>K</div>
                                    <div className="flex flex-col gap-4 text-white/50">
                                        <svg className="w-4 h-4 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                    </div>
                                    <div className="text-[8px] text-white/50 transform -rotate-90 origin-center tracking-widest whitespace-nowrap">עברית / EN</div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center px-8">
                                    <span className="text-premium-gold font-sans font-bold text-[10px] italic mb-2 tracking-widest">מסעדת שף בתל אביב</span>
                                    <h4 className="text-white text-3xl font-sans font-bold leading-tight mb-4">חוויה קולינרית<br/>בלתי נשכחת.</h4>
                                    <div className="flex gap-3">
                                        <button className="border border-premium-gold text-premium-gold text-[10px] px-4 py-2 hover:bg-premium-gold hover:text-black transition-colors">הזמנת שולחן</button>
                                        <button className="text-white text-[10px] px-4 py-2 hover:text-premium-gold transition-colors underline underline-offset-4">לתפריט</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / קולינריה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">OAK מסעדת שף</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר תדמית מינימליסטי המעביר את החוויה הקולינרית אל המסך, עם ארכיטקטורת תוכן חכמה וחיבור למערכת הזמנת מקומות.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 5: High Fashion Ecommerce (NOIR) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("ecommerce")}`} data-category="ecommerce">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">noir-apparel.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-white pt-8">
                            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" alt="Fashion Site Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 object-top z-0"/>
                            
                            {/* Fake Website UI Overlay */}
                            <div className="relative z-10 w-full h-full flex flex-col justify-between bg-black/10">
                                {/* Top Bar */}
                                <div className="w-full px-4 py-2.5 flex justify-between items-center text-black bg-white/90 backdrop-blur-md">
                                    <div className="font-sans font-black text-sm tracking-tighter">NOIR.</div>
                                    <div className="flex gap-3 text-[9px] font-bold">
                                        <span className="cursor-pointer">נשים</span>
                                        <span className="text-gray-400 cursor-pointer">גברים</span>
                                        <span className="text-gray-400 cursor-pointer">אקססוריז</span>
                                    </div>
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                </div>
                                {/* Floating Content */}
                                <div className="px-5 pb-6 text-center">
                                    <h4 className="text-white text-4xl font-sans font-bold tracking-tight drop-shadow-lg mb-3">קולקציית<br/>סתיו 24</h4>
                                    <button className="bg-black text-white text-[10px] font-bold tracking-wide px-6 py-2 shadow-xl hover:bg-white hover:text-black transition-colors">לקנייה</button>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">איקומרס / אופנה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">NOIR - אופנת עילית</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">חנות וירטואלית רספונסיבית במיוחד למותג אופנה, מתמקדת בביצועים מהירים, הגדלת המרות ובחוויית קנייה חלקה במובייל.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 6: Wellness Booking App (ZEN) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("app")}`} data-category="app">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">zen-booking.co.il</span>
                            </div>
                        </div>

                        <div className="w-full h-full relative overflow-hidden bg-[#faf9f7] pt-8 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" alt="Wellness App Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-30 z-0"/>
                            
                            {/* Fake Mobile App Layout inside browser */}
                            <div className="relative z-10 w-[200px] h-[90%] bg-white rounded-[24px] shadow-2xl border-4 border-gray-100 overflow-hidden flex flex-col">
                                {/* App Header */}
                                <div className="px-3 pt-3 pb-2 flex justify-between items-center bg-white z-10">
                                    <div className="font-sans font-light text-[11px] tracking-widest text-gray-800">ZEN.</div>
                                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" className="w-full h-full object-cover"/></div>
                                </div>
                                {/* App Content (Schedule) */}
                                <div className="flex-1 px-3 bg-gray-50/50 overflow-hidden">
                                    <div className="flex justify-between text-[8px] text-gray-400 mb-2 mt-1">
                                        <span className="text-black font-bold border-b border-black pb-0.5">היום</span>
                                        <span>מחר</span>
                                        <span>חמישי</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                                            <div>
                                                <div className="text-[9px] font-bold text-gray-800">ויניאסה יוגה</div>
                                                <div className="text-[7px] text-gray-400">08:00 • סטודיו מרכזי</div>
                                            </div>
                                            <div className="bg-black text-white text-[7px] px-2 py-1 rounded-full">הזמן</div>
                                        </div>
                                        <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                                            <div>
                                                <div className="text-[9px] font-bold text-gray-800">פילאטיס מכשירים</div>
                                                <div className="text-[7px] text-gray-400">10:30 • חדר פרטי</div>
                                            </div>
                                            <div className="bg-gray-100 text-gray-400 text-[7px] px-2 py-1 rounded-full">מלא</div>
                                        </div>
                                    </div>
                                </div>
                                {/* App Bottom Nav */}
                                <div className="h-10 bg-white border-t border-gray-100 flex justify-around items-center text-gray-400 px-2 pb-1">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">אפליקציות ומערכות / שירותים</span>
                            <h3 className="text-2xl font-bold text-white mb-3">ZEN - מערכת סטודיו</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אפליקציית ווב מתקדמת לניהול מערכת שעות והזמנת שיעורים עבור רשת מכוני יוגה ופילאטיס. חוויה מהירה ואינטואיטיבית.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 7: Luxury Real Estate Corporate (VISTA) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">vista-properties.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8 flex flex-col justify-between">
                            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Real Estate Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            {/* Header */}
                            <div className="relative z-10 w-full px-5 py-3 flex justify-between items-center text-white bg-gradient-to-b from-black/70 to-transparent">
                                <div className="font-sans font-bold font-bold text-lg tracking-wide">VISTA.</div>
                                <div className="text-[9px] font-medium tracking-wide bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">צור קשר</div>
                            </div>
                            
                            {/* Search Bar Mockup */}
                            <div className="relative z-10 w-full px-4 mb-6">
                                <div className="bg-white rounded-lg p-2 shadow-2xl flex flex-col gap-2">
                                    <div className="flex items-center bg-gray-50 rounded px-2 py-1.5 border border-gray-100">
                                        <svg className="w-3.5 h-3.5 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="text-gray-400 text-[9px]">חפש עיר, שכונה או פרויקט...</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-gray-50 text-gray-600 text-[8px] font-bold py-1.5 rounded text-center border border-gray-100">דירות למכירה <span className="text-[6px]">▼</span></div>
                                        <div className="flex-1 bg-gray-900 text-white text-[8px] font-bold py-1.5 rounded text-center cursor-pointer">חיפוש נכסים</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / נדל"ן יוקרה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">VISTA - שיווק נדל"ן</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר קטלוגי המציג פרויקטים של נדל"ן יוקרה בישראל, מבוסס על ויזואליה חזקה ומערכת סינון נכסים מותאמת אישית.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 8: Tech Audio Ecommerce (AURA) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("ecommerce")}`} data-category="ecommerce">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">aura-audio.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-black pt-8">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" alt="Audio Ecommerce Mockup" className="project-image absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 z-0"/>
                            
                            {/* Product Layout */}
                            <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
                                <div className="flex justify-between items-start">
                                    <div className="text-white font-bold text-lg italic">AURA</div>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                </div>
                                <div className="w-full max-w-[150px]">
                                    <div className="flex items-center gap-1 mb-1">
                                        <div className="flex gap-0.5 text-yellow-400 text-[8px]">★★★★★</div>
                                        <span className="text-gray-400 text-[7px]">(124)</span>
                                    </div>
                                    <h4 className="text-white text-xl font-bold tracking-tight mb-1 leading-none">Aura One Pro</h4>
                                    <p className="text-gray-400 text-[8px] mb-3">אוזניות פרימיום עם סינון רעשים אקטיבי וסאונד היקפי.</p>
                                    
                                    <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10">
                                        <span className="text-white font-bold text-sm">₪1,299</span>
                                        <button className="bg-white text-black text-[9px] font-bold px-3 py-1.5 rounded hover:bg-gray-200">הוסף לסל</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">איקומרס / סאונד וטכנולוגיה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">AURA Audio</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">חנות אונליין לאוזניות פרימיום ציוד שמע. בנינו ממשק 3D אינטראקטיבי המאפשר לסובב ולבחון את המוצר מכל זווית לפני הרכישה.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 9: Fintech Dashboard App (PayFlow) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("app")}`} data-category="app">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">app.payflow.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-[#0a192f] pt-8 p-4 flex flex-col">
                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">י</div>
                                    <div>
                                        <span className="block text-white/60 text-[8px]">בוקר טוב,</span>
                                        <span className="block text-white text-[10px] font-bold">ישראל ישראלי</span>
                                    </div>
                                </div>
                                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            </div>
                            
                            {/* Balance Card */}
                            <div className="relative z-10 w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-3 shadow-lg mb-3 border border-blue-500/30">
                                <span className="text-white/80 text-[9px] font-medium block mb-0.5">יתרה זמינה</span>
                                <div className="text-white text-2xl font-light tracking-wide mb-3">₪12,450.00</div>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white text-[8px] font-bold py-1.5 rounded flex items-center justify-center gap-1"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> הפקדה</button>
                                    <button className="flex-1 bg-white/20 hover:bg-white/30 text-white text-[8px] font-bold py-1.5 rounded flex items-center justify-center gap-1"><svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> העברה</button>
                                </div>
                            </div>

                            {/* Transactions */}
                            <div className="relative z-10 flex-1 bg-[#112240] rounded-xl p-3 border border-white/5">
                                <span className="text-white text-[9px] font-bold block mb-2">פעולות אחרונות</span>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-red-500/10 text-red-400 flex items-center justify-center"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                                            <div><span className="block text-white text-[9px]">אמזון ישראל</span><span className="block text-gray-500 text-[7px]">היום, 14:30</span></div>
                                        </div>
                                        <span className="text-white text-[9px] font-bold">-₪342.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-green-500/10 text-green-400 flex items-center justify-center"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div>
                                            <div><span className="block text-white text-[9px]">העברה מרועי</span><span className="block text-gray-500 text-[7px]">אתמול, 09:15</span></div>
                                        </div>
                                        <span className="text-green-400 text-[9px] font-bold">+₪150.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">אפליקציות ומערכות / פינטק</span>
                            <h3 className="text-2xl font-bold text-white mb-3">PayFlow - ארנק דיגיטלי</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">עיצוב ופיתוח אפליקציית ווב פיננסית להעברת כספים בינלאומית, עם דגש על אבטחת מידע קפדנית וממשק ידידותי למשתמש.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 10: Law Firm Corporate (Sterling) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">sterling-law.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-gray-100 pt-8 flex flex-col">
                            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" alt="Law Firm Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            <div className="relative z-10 w-full bg-[#1a2332]/90 backdrop-blur text-white flex justify-between items-center px-4 py-3 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 border border-white/40 flex items-center justify-center">
                                        <span className="font-sans font-bold text-[10px]">S</span>
                                    </div>
                                    <span className="font-sans font-bold text-[11px] font-bold tracking-wide">סטרלינג ושות'</span>
                                </div>
                                <div className="flex gap-3 text-[8px] text-gray-300 uppercase tracking-widest hidden sm:flex">
                                    <span className="hover:text-white cursor-pointer">הצוות</span>
                                    <span className="hover:text-white cursor-pointer">תחומי עיסוק</span>
                                    <span className="hover:text-white cursor-pointer">צור קשר</span>
                                </div>
                            </div>
                            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 bg-black/40">
                                <span className="text-gray-300 text-[8px] uppercase tracking-[0.2em] mb-2 border-b border-gray-400 pb-1">מצוינות משפטית מ-1998</span>
                                <h4 className="text-white text-3xl font-sans font-bold leading-snug mb-4">מובילים בייצוג מסחרי<br/>וליטיגציה מורכבת.</h4>
                                <button className="bg-[#c2a170] text-white text-[9px] font-bold px-5 py-2 hover:bg-[#a6885b] transition-colors">קבע פגישת ייעוץ</button>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / עריכת דין</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Sterling & Co</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר תדמית סמכותי ומרשים למשרד עורכי דין בינלאומי. ארכיטקטורת האתר מדגישה את מומחיות המשרד ואת הצוות המשפטי.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 11: Cosmetics Ecommerce (Glow) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("ecommerce")}`} data-category="ecommerce">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">glow-botanicals.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-[#f4ece4] pt-8 flex flex-col">
                            <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80" alt="Cosmetics Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-60 z-0"/>
                            
                            <div className="relative z-10 w-full flex justify-between items-center px-5 py-4 text-gray-800">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                                <div className="font-sans font-bold text-xl font-bold tracking-tight">GLOW.</div>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </div>
                            <div className="relative z-10 flex-1 flex flex-col justify-end p-5">
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm inline-block self-start max-w-[160px]">
                                    <span className="bg-green-100 text-green-800 text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">100% טבעי</span>
                                    <h4 className="text-gray-900 text-sm font-sans font-bold font-bold mb-1">סרום ויטמין C</h4>
                                    <p className="text-gray-500 text-[8px] mb-2 leading-tight">מעניק לחות עמוקה וזוהר טבעי לעור הפנים.</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-900 font-bold text-[10px]">₪149</span>
                                        <button className="bg-gray-900 text-white text-[8px] px-3 py-1.5 rounded-full hover:bg-gray-700">הוסף</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">איקומרס / ביוטי וקוסמטיקה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Glow Botanicals</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר איקומרס למותג קוסמטיקה טבעית. עיצוב נקי ורך המעביר את ערכי המותג, עם תהליך צ'קאאוט פשוט וממיר במיוחד.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 12: Fitness Tracker App (PULSE) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("app")}`} data-category="app">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">app.pulse-fitness.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-black pt-8 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" alt="Fitness Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-40 z-0"/>
                            
                            {/* Apple Watch / Smart Device Mockup inside */}
                            <div className="relative z-10 w-[140px] h-[160px] bg-black rounded-3xl border-[6px] border-gray-800 flex flex-col p-3 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                <span className="text-white text-[8px] text-center font-bold">אימון כוח</span>
                                {/* Fake rings */}
                                <div className="flex-1 flex items-center justify-center relative">
                                    <div className="w-16 h-16 rounded-full border-4 border-gray-800 border-t-red-500 flex items-center justify-center transform rotate-45">
                                        <div className="transform -rotate-45 text-center">
                                            <span className="block text-red-500 text-xl font-bold leading-none">142</span>
                                            <span className="block text-gray-400 text-[6px] uppercase">BPM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-center border-t border-gray-800 pt-1 mt-1">
                                    <div>
                                        <span className="block text-white text-[9px] font-bold">340</span>
                                        <span className="block text-red-500 text-[6px]">קק"ל</span>
                                    </div>
                                    <div>
                                        <span className="block text-white text-[9px] font-bold">42:10</span>
                                        <span className="block text-red-500 text-[6px]">זמן</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">אפליקציות ומערכות / כושר ואורח חיים</span>
                            <h3 className="text-2xl font-bold text-white mb-3">PULSE - מעקב אימונים</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">מערכת SaaS למאמני כושר לניהול מתאמנים, תוכניות אימון ומעקב התקדמות בזמן אמת. ממשק אנרגטי ומניע לפעולה.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 13: Architecture Corporate (Studio K) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">studiok-arch.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-white pt-8 flex flex-col">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Architecture Mockup" className="project-image absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 z-0"/>
                            
                            <div className="relative z-10 w-full flex justify-between px-6 py-4">
                                <div className="text-white font-sans font-bold text-sm tracking-widest border-b-2 border-white pb-0.5">STUDIO K.</div>
                                <div className="space-y-1 cursor-pointer">
                                    <div className="w-6 h-0.5 bg-white"></div>
                                    <div className="w-4 h-0.5 bg-white ml-auto"></div>
                                </div>
                            </div>
                            <div className="relative z-10 flex-1 flex flex-col justify-end p-6">
                                <span className="text-white/70 text-[9px] uppercase tracking-[0.2em] mb-1">פרויקט נבחר / תל אביב</span>
                                <h4 className="text-white text-3xl font-light tracking-wide mb-4">מגדל רוטשילד 22</h4>
                                <div className="flex gap-1">
                                    <div className="w-8 h-0.5 bg-white"></div>
                                    <div className="w-2 h-0.5 bg-white/40"></div>
                                    <div className="w-2 h-0.5 bg-white/40"></div>
                                    <div className="w-2 h-0.5 bg-white/40"></div>
                                </div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / אדריכלות</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Studio K</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">תיק עבודות דיגיטלי למשרד אדריכלים בינלאומי. עיצוב מינימליסטי השם את התמונות במרכז באמצעות תצוגת מסך מלא.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 14: Fine Jewelry Ecommerce (LUMIÈRE) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("ecommerce")}`} data-category="ecommerce">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">lumiere.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-[#111] pt-8 flex flex-col items-center">
                            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" alt="Jewelry Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 opacity-50 z-0"/>
                            
                            <div className="relative z-10 w-full px-5 py-4 border-b border-[#d4af37]/20 flex justify-between items-center bg-black/30 backdrop-blur-sm">
                                <span className="text-[#d4af37] text-[8px] uppercase tracking-widest cursor-pointer">חיפוש</span>
                                <h4 className="text-[#d4af37] text-lg font-sans font-bold tracking-widest">LUMIÈRE</h4>
                                <span className="text-[#d4af37] text-[8px] uppercase tracking-widest cursor-pointer">סל (0)</span>
                            </div>
                            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
                                <h4 className="text-white text-2xl font-sans font-bold font-light tracking-wide mb-4">קולקציית אבן ספיר</h4>
                                <div className="px-6 py-2 border border-[#d4af37] text-[#d4af37] text-[9px] uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer">למדידה ב-AR</div>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">איקומרס / תכשיטי יוקרה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">LUMIÈRE</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">פלטפורמת מסחר יוקרתית למותג תכשיטים, משלבת חווית גלישה אקסקלוסיבית ופיצ'ר של מדידת תכשיטים במציאות רבודה (AR).</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 15: EdTech App (Elevate) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("app")}`} data-category="app">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">learn-elevate.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-[#e0e7ff] pt-8 flex flex-col p-4">
                            {/* Dashboard Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path></svg></div>
                                    <span className="text-blue-900 font-bold text-[11px]">Elevate</span>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white shadow-sm overflow-hidden"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" className="w-full h-full object-cover"/></div>
                            </div>
                            
                            {/* Course Progress */}
                            <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-3">
                                <span className="block text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-1">הקורס הנוכחי שלך</span>
                                <h4 className="text-gray-900 text-[11px] font-bold mb-2">מבוא לפיתוח Full-Stack עם React</h4>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-600 w-[65%]"></div></div>
                                    <span className="text-blue-600 text-[9px] font-bold">65%</span>
                                </div>
                            </div>
                            
                            {/* Category Tags */}
                            <div className="flex gap-2">
                                <span className="bg-blue-100 text-blue-700 text-[8px] font-bold px-2 py-1 rounded">תכנות (12)</span>
                                <span className="bg-purple-100 text-purple-700 text-[8px] font-bold px-2 py-1 rounded">עיצוב UI/UX (8)</span>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">אפליקציות ומערכות / EdTech</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Elevate - פלטפורמת למידה</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">מערכת ניהול קורסים (LMS) מתקדמת המאפשרת למידה מקוונת חכמה, כולל אזור אישי לתלמיד, צפייה בוידאו אינטראקטיבי וניהול מטלות.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>

                    {/* Item 16: Automotive Corporate (Apex) */}
                    <div className={`project-card relative rounded-2xl overflow-hidden group portfolio-item reveal bg-gray-900 aspect-[4/3] border border-gray-800 transition-all duration-300 ${filterClass("corporate")}`} data-category="corporate">
                        <div className="absolute top-0 w-full h-8 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 gap-2 z-20 transition-transform duration-500 group-hover:-translate-y-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            <div className="mx-auto w-1/2 max-w-[180px] h-4 bg-gray-900/50 rounded-full border border-gray-600 flex items-center justify-center">
                                <span className="text-[10px] text-gray-300 font-sans tracking-wider">apex-motors.co.il</span>
                            </div>
                        </div>
                        <div className="w-full h-full relative overflow-hidden bg-black pt-8 flex flex-col justify-end">
                            <img src="https://images.unsplash.com/photo-1503378462226-f39b4f49ae51?auto=format&fit=crop&w=800&q=80" alt="Automotive Mockup" className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 z-0"/>
                            
                            <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-5 text-right">
                                <h4 className="text-white text-4xl font-bold tracking-tight mb-2 italic uppercase">GT-R 500</h4>
                                <div className="flex gap-4 mb-4 justify-start text-white">
                                    <div><span className="block text-red-500 text-[11px] font-bold">3.2s</span><span className="text-gray-400 text-[7px] uppercase tracking-wider">0-100 קמ"ש</span></div>
                                    <div className="w-[1px] h-6 bg-white/20"></div>
                                    <div><span className="block text-red-500 text-[11px] font-bold">650</span><span className="text-gray-400 text-[7px] uppercase tracking-wider">כ"ס</span></div>
                                </div>
                                <button className="bg-red-600 text-white text-[9px] font-bold px-5 py-2 uppercase tracking-widest hover:bg-red-700 transition-colors">תיאום נסיעת מבחן</button>
                            </div>
                        </div>
                        <div className="project-overlay group-hover:opacity-100 absolute inset-0 bg-premium-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center z-30">
                            <span className="text-xs font-medium text-premium-gold mb-3 tracking-widest uppercase">תדמית ו-B2B / רכבי יוקרה</span>
                            <h3 className="text-2xl font-bold text-white mb-3">Apex Motors</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">אתר תדמית ולידים מרהיב לסוכנות יבוא רכבי יוקרה. חווית גלישה המשדרת עוצמה ומהירות, עם קונפיגורטור לבניית הרכב המושלם.</p>
                            <button onClick={(e) => { e.stopPropagation(); const card = e.currentTarget.closest(".project-card"); if(card) { onOpenModal({ category: card.getAttribute("data-category"), imgSrc: card.querySelector("img")?.src, title: card.querySelector("h3")?.textContent, subCategory: card.querySelector(".project-overlay span")?.textContent }); } }} className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-transparent hover:border-premium-gold transition-colors pb-1">
                                צפה בתהליך הפיתוח
                            </button>
                        </div>
                    </div>
  </>);
}

