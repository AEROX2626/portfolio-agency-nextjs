const fs = require('fs');
let content = fs.readFileSync('src/components/ProjectCards.tsx', 'utf-8');

// Update PayFlow
content = content.replace(
  "type: 'wallet',\n    ui: { name: 'ישראל ישראלי', balance: '₪12,450.00'",
  "type: 'wallet',\n    ui: { theme: 'blue', name: 'ישראל ישראלי', balance: '₪12,450.00'"
);

// Update CryptoWallet
content = content.replace(
  "type: 'wallet',\n    ui: { name: 'תיק השקעות', balance: '$45,230.50'",
  "type: 'wallet',\n    ui: { theme: 'dark', name: 'תיק השקעות', balance: '$45,230.50'"
);

// Update NexaData
content = content.replace(
  "type: 'dashboard',\n    ui: { logo: 'נקסה-דאטה'",
  "type: 'dashboard',\n    ui: { theme: 'blue', logo: 'נקסה-דאטה'"
);

// Update TechFlow
content = content.replace(
  "type: 'dashboard',\n    ui: { logo: 'TechFlow'",
  "type: 'dashboard',\n    ui: { theme: 'emerald', logo: 'TechFlow'"
);

// Now update the renderUI function to use themes
// For dashboard:
content = content.replace(
  '<div className="w-full h-full relative overflow-hidden bg-[#0f172a] pt-8 flex">',
  '<div className={`w-full h-full relative overflow-hidden ${ui.theme === "emerald" ? "bg-[#18181b]" : "bg-[#0f172a]"} pt-8 flex`}>'
);
content = content.replace(
  '<div className="w-1/4 h-full bg-[#1e293b] border-l border-gray-800 flex flex-col p-3 z-10">',
  '<div className={`w-1/4 h-full ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"} border-l border-gray-800 flex flex-col p-3 z-10`}>'
);
content = content.replace(
  '<div className="w-4 h-4 bg-blue-500 rounded-md"></div>',
  '<div className={`w-4 h-4 ${ui.theme === "emerald" ? "bg-emerald-500" : "bg-blue-500"} rounded-md`}></div>'
);
content = content.replace(
  'className={`${i === 0 ? \'bg-blue-500/10 text-blue-400\' : \'text-gray-400\'} rounded p-1.5 flex items-center gap-2 text-[9px] font-bold`}',
  'className={`${i === 0 ? (ui.theme === "emerald" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400") : "text-gray-400"} rounded p-1.5 flex items-center gap-2 text-[9px] font-bold`}'
);

content = content.replaceAll(
  '<div className="bg-[#1e293b] p-2 rounded-lg border border-gray-700/50">',
  '<div className={`p-2 rounded-lg border border-gray-700/50 ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]`}"}>'
);
content = content.replace(
  '<div className="bg-[#1e293b] p-2 rounded-lg border border-gray-700/50 h-[80px] flex items-end gap-1 px-3">',
  '<div className={`p-2 rounded-lg border border-gray-700/50 h-[80px] flex items-end gap-1 px-3 ${ui.theme === "emerald" ? "bg-[#27272a]" : "bg-[#1e293b]"}`}>'
);
content = content.replace(
  '<div className="w-full bg-blue-500/20 h-1/3 rounded-t-sm"></div>',
  '<div className={`w-full h-1/3 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/20" : "bg-blue-500/20"}`}></div>'
);
content = content.replace(
  '<div className="w-full bg-blue-500/40 h-2/3 rounded-t-sm"></div>',
  '<div className={`w-full h-2/3 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/40" : "bg-blue-500/40"}`}></div>'
);
content = content.replace(
  '<div className="w-full bg-blue-500/60 h-1/2 rounded-t-sm"></div>',
  '<div className={`w-full h-1/2 rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500/60" : "bg-blue-500/60"}`}></div>'
);
content = content.replace(
  '<div className="w-full bg-blue-500 h-[90%] rounded-t-sm"></div>',
  '<div className={`w-full h-[90%] rounded-t-sm ${ui.theme === "emerald" ? "bg-emerald-500" : "bg-blue-500"}`}></div>'
);

// For wallet:
content = content.replace(
  '<div className="w-full h-full relative overflow-hidden bg-[#0a192f] pt-8 p-4 flex flex-col">',
  '<div className={`w-full h-full relative overflow-hidden pt-8 p-4 flex flex-col ${ui.theme === "dark" ? "bg-[#111111]" : "bg-[#0a192f]"}`}>'
);
content = content.replace(
  '<div className="relative z-10 w-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-3 shadow-lg mb-3 border border-blue-500/30">',
  '<div className={`relative z-10 w-full rounded-xl p-3 shadow-lg mb-3 border ${ui.theme === "dark" ? "bg-gradient-to-r from-purple-600 to-indigo-800 border-purple-500/30" : "bg-gradient-to-r from-blue-600 to-blue-800 border-blue-500/30"}`}>'
);
content = content.replace(
  '<div className="relative z-10 flex-1 bg-[#112240] rounded-xl p-3 border border-white/5">',
  '<div className={`relative z-10 flex-1 rounded-xl p-3 border border-white/5 ${ui.theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#112240]"}`}>'
);

fs.writeFileSync('src/components/ProjectCards.tsx', content);
console.log('Patched');
