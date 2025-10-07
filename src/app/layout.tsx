import { Manrope, Raleway, Sansation } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const sansation = Sansation({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansation',
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
});

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-raleway',
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
});

const manrope = Manrope({
  weight: ['600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
  fallback: ['system-ui', '-apple-system', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Aleko Sokurashvili',
  description: 'Дізнайтеся ключ до створення вірусного контенту: поради, стратегії та приклади для вашого бренду.',
  other: {
    'color-scheme': 'only light',
    'next-size-adjust': 'auto',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body className={`${sansation.variable} ${raleway.variable} ${manrope.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
