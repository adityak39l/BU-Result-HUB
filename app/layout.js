import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://bu-btech-resulthub.vercel.app'),
  title: {
    default: 'BU IET ResultHub — Bundelkhand University B.Tech Results & Leaderboard',
    template: '%s | BU IET ResultHub'
  },
  description: 'BU IET ResultHub — Official student-focused B.Tech result & SGPA leaderboard portal for Bundelkhand University (BU Jhansi) IET. Check semester marksheets, branch rankings, subject analytics, and academic twins for CSE, ECE, ME, EIE, and BME.',
  keywords: [
    'BU IET ResultHub', 'BU IET Result Hub', 'BU IET Result',
    'BU Jhansi Result Hub', 'BU Jhansi Result', 'IET BU Jhansi Result',
    'BU Jhansi B.Tech Result', 'IET BU Jhansi ResultHub', 'Bundelkhand University BTech Result',
    'BU Jhansi SGPA Leaderboard', 'IET Jhansi Result', 'बुंदेलखंड विश्वविद्यालय रिजल्ट',
    'BU Jhansi Result Check Online', 'BU Jhansi Leaderboard', 'IET BU Result'
  ].join(', '),
  authors: [{ name: 'BU IET ResultHub' }],
  creator: 'BU IET ResultHub',
  publisher: 'BU IET ResultHub',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bu-btech-resulthub.vercel.app',
    siteName: 'BU IET ResultHub',
    title: 'BU IET ResultHub — B.Tech Results & SGPA Leaderboard',
    description: 'Check B.Tech results, SGPA leaderboards & student rankings for Bundelkhand University (BU Jhansi) IET — CSE, ECE, ME, EIE, BME branches.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BU IET ResultHub — B.Tech Results & Analytics',
    description: 'Check BU Jhansi IET B.Tech results, SGPA leaderboard & student performance analytics.',
  },
  alternates: {
    canonical: 'https://bu-btech-resulthub.vercel.app',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BU IET ResultHub',
    alternateName: ['BU IET Result Hub', 'BU Jhansi Result Hub', 'IET BU Jhansi ResultHub'],
    url: 'https://bu-btech-resulthub.vercel.app',
    description: 'Official student-focused B.Tech result & SGPA leaderboard portal for Bundelkhand University (BU Jhansi) IET.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bu-btech-resulthub.vercel.app/result?rollNo={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-950 text-gray-100 selection:bg-amber-500 selection:text-navy-950">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
