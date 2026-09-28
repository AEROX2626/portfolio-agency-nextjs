const fs = require('fs');
let c = fs.readFileSync('src/components/ProjectCards.tsx', 'utf-8');
c = c.replaceAll('bg-[#1e293b]`}""}>', 'bg-[#1e293b]"}>');
c = c.replaceAll('bg-[#1e293b]`} ">', 'bg-[#1e293b]"`>');
c = c.replaceAll('bg-[#1e293b]`}"}>', 'bg-[#1e293b]"`>');
fs.writeFileSync('src/components/ProjectCards.tsx', c);
