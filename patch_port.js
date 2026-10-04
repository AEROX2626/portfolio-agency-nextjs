const fs = require('fs');
let c = fs.readFileSync('src/components/Portfolio.tsx', 'utf-8');
c = c.replace(
  'className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md" \n            dir="rtl"\n          >',
  'className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md" \n            dir="rtl"\n            onClick={() => setModalData(null)}\n          >'
);
c = c.replace(
  'className="bg-[#111] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col md:flex-row relative"\n            >',
  'className="bg-[#111] rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col md:flex-row relative"\n              onClick={(e) => e.stopPropagation()}\n            >'
);
fs.writeFileSync('src/components/Portfolio.tsx', c);
