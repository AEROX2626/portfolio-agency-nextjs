import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-heebo',
});

export const metadata: Metadata = {
  title: 'תיק עבודות | סוכנות דיגיטל',
  description: 'סוכנות בוטיק דיגיטלית - עיצוב, פיתוח וחדשנות למותגים שרוצים להוביל את השוק.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`scroll-smooth ${heebo.variable}`}>
      <body className="font-sans bg-[#0a0a0a] text-gray-200 antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
