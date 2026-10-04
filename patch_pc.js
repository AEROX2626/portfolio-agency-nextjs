const fs = require('fs');
let c = fs.readFileSync('src/components/ProjectCards.tsx', 'utf-8');
c = c.replace('צפה במקרה הבוחן', 'צפה בפרויקט');
fs.writeFileSync('src/components/ProjectCards.tsx', c);
