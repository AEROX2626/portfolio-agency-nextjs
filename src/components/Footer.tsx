export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-premium-900 font-bold text-lg leading-none">D</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">הסוכנות<span className="text-gray-500">.</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              סוכנות דיגיטל המתמחה בעיצוב ופיתוח פתרונות ווב מתקדמים למותגים מובילים. אנחנו מייצרים חוויות דיגיטליות שמובילות תוצאות.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-sans">ניווט מהיר</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-sans">
              <li><a href="#portfolio" className="hover:text-white transition-colors">תיק עבודות</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">תחומי התמחות</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-sans">יצירת קשר</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-sans">
              <li>תל אביב, ישראל</li>
              <li>contact@digital-agency.co.il</li>
              <li>03-123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans">
          <p>&copy; 2024 כל הזכויות שמורות. סוכנות דיגיטל.</p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors ml-4">מדיניות פרטיות</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
