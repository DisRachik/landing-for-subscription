import { dir } from 'i18next';
import { Manrope, Raleway, Sansation } from 'next/font/google';

import { fallbackLng, languages } from '@/app/i18n/settings';
import { Header } from '@/sections';

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

export async function generateStaticParams() {
  return [
    { lng: [] }, // для дефолтної мови (без префіксу в URL)
    ...languages.filter(lng => lng !== fallbackLng).map(lng => ({ lng: [lng] })), // інші мови як масив
  ];
}

export const metadata: Metadata = {
  title: 'Aleko Sokurashvili',
  description: 'Дізнайтеся ключ до створення вірусного контенту: поради, стратегії та приклади для вашого бренду.',
  other: {
    'color-scheme': 'only light',
    'next-size-adjust': 'auto',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lng: string[];
  }>;
}>) {
  const { lng: lngArray } = await params;
  const lng = lngArray?.[0] || fallbackLng;

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${sansation.variable} ${raleway.variable} ${manrope.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
