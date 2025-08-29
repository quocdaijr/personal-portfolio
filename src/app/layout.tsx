import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://quocdaijr-portfolio.netlify.app'),
  title: {
    default: 'Quoc Dai - Software Engineer & Full-Stack Developer',
    template: '%s | Quoc Dai Portfolio',
  },
  description: 'Software Engineer specializing in Vue.js, JavaScript, Python, and full-stack web development. Experienced in building scalable applications and modern web solutions.',
  keywords: ['portfolio', 'software engineer', 'vue.js', 'javascript', 'python', 'full-stack developer', 'web development', 'nextjs', 'react', 'tailwindcss'],
  authors: [{ name: 'Quoc Dai', url: 'https://quocdaijr-portfolio.netlify.app' }],
  creator: 'Quoc Dai',
  publisher: 'Quoc Dai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quocdaijr-portfolio.netlify.app',
    title: 'Quoc Dai - Software Engineer & Full-Stack Developer',
    description: 'Software Engineer specializing in Vue.js, JavaScript, Python, and full-stack web development. Experienced in building scalable applications and modern web solutions.',
    siteName: 'Quoc Dai Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quoc Dai - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quoc Dai - Software Engineer & Full-Stack Developer',
    description: 'Software Engineer specializing in Vue.js, JavaScript, Python, and full-stack web development.',
    creator: '@quocdaijr',
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
