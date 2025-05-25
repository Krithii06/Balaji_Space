import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Portfolio | Jacek Sawoniewicz',
  description: 'Explore the projects, publications, and achievements of Jacek Sawoniewicz.',
  authors: [{ name: 'Jacek Sawoniewicz' }],
  keywords: ['Portfolio', 'Jacek Sawoniewicz', 'Projects', 'Publications', 'Research', 'Developer'],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#1D4ED8', // Tailwind's blue-700
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen font-sans antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
