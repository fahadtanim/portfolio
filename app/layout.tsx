import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'John Doe | Senior Front-End Engineer',
  description:
    'Portfolio of John Doe, a senior front-end engineer with 7 years of experience building high-performance web applications.',
  keywords: [
    'front-end engineer',
    'react developer',
    'typescript',
    'next.js',
    'web development',
    'portfolio',
  ],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe | Senior Front-End Engineer',
    description:
      'Portfolio of John Doe, a senior front-end engineer with 7 years of experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Senior Front-End Engineer',
    description:
      'Portfolio of John Doe, a senior front-end engineer with 7 years of experience.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
