// frontend/src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
// 1. Import Google Fonts the "Next.js Way"
import { Inter, Newsreader } from 'next/font/google';

// 2. Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aura Vision',
  description: 'AI Interior Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 3. Force Dark Mode & Inject Font Variables
    <html lang="en" className={`dark ${inter.variable} ${newsreader.variable}`}>
      <head>
        {/* 4. Force Load Material Icons from CDN */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="bg-[#101922] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}