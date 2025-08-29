import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Personal Portfolio - Your Name',
    template: '%s | Personal Portfolio',
  },
  description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
  keywords: ['portfolio', 'nextjs', 'react', 'tailwindcss', 'mdx', 'blog', 'software engineer', 'web developer'],
  authors: [{ name: 'Your Name', url: 'https://your-domain.com' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Personal Portfolio - Your Name',
    description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
    siteName: 'Personal Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Personal Portfolio - Your Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Portfolio - Your Name',
    description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
    creator: '@yourusername',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
