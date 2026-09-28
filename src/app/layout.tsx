import type { Metadata } from 'next';
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-heebo',
});

const frank = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-frank',
});

export const metadata: Metadata = {
  title: 'תיק עבודות | סוכנות דיגיטל',
  description: 'סוכנות דיגיטל ופיתוח אתרים מתקדמים - עיצוב, פיתוח וקידום אתרים ברמה הגבוהה ביותר.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`scroll-smooth ${heebo.variable} ${frank.variable}`}>
      <body className="font-sans bg-[#0a0a0a] text-gray-200 antialiased selection:bg-premium-gold/30">
        {children}
      </body>
    </html>
  );
}
