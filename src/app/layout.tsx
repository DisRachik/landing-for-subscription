import { Manrope, Raleway, Sansation } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const sansation = Sansation({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansation',
});

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-raleway',
});

const manrope = Manrope({
  weight: ['600', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Aleko Sokurashvili',
  description: 'Дізнайтеся ключ до створення вірусного контенту: поради, стратегії та приклади для вашого бренду.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body className={`${sansation.variable} ${raleway.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
