const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.tsx', 'utf-8');
c = c.replace('<li>תל אביב, ישראל</li>\n', '');
c = c.replace('<li>03-123-4567</li>', '<li>050-393-8114</li>\n              <li><a href="https://wa.me/972503938114" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-green-500 font-bold block mt-2">וואטסאפ</a></li>');
fs.writeFileSync('src/components/Footer.tsx', c);
