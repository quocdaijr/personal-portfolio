import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Personal Portfolio',
    template: '%s | Personal Portfolio',
  },
  description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
  keywords: ['portfolio', 'nextjs', 'react', 'tailwindcss', 'mdx', 'blog'],
  authors: [{ name: 'quocdaijr' }],
  creator: 'quocdaijr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
    siteName: 'Personal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my professional work, blog articles, and personal information.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
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
