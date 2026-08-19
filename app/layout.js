import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://bu-btech-resulthub.vercel.app'),
  title: 'BU Jhansi Result Hub — B.Tech Results, SGPA Leaderboard & Analytics',
  description: 'Check B.Tech results of Bundelkhand University (BU Jhansi) IET department. View SGPA leaderboards, student rankings, subject analytics & performance comparison for EIE, BME and Mechanical Engineering branches.',
  keywords: [
    'BU Jhansi result', 'Bundelkhand University result', 'BU Jhansi B.Tech result',
    'IET BU Jhansi result', 'BU Jhansi SGPA', 'BU Jhansi leaderboard',
    'Bundelkhand University BTech SGPA', 'BU Jhansi EIE result',
    'BU Jhansi Mechanical result', 'BU Jhansi BME result',
    'BU Jhansi semester result 2024', 'BU Jhansi result hub',
    'बुंदेलखंड विश्वविद्यालय रिजल्ट', 'BU Jhansi result check online'
  ].join(', '),
  authors: [{ name: 'BU ResultHub' }],
  creator: 'BU Jhansi Result Hub',
  publisher: 'BU Jhansi Result Hub',
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
    siteName: 'BU Jhansi Result Hub',
    title: 'BU Jhansi Result Hub — B.Tech Results & SGPA Leaderboard',
    description: 'Check B.Tech results, SGPA leaderboards & student rankings for Bundelkhand University (BU Jhansi) IET — EIE, BME, Mechanical branches.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BU Jhansi Result Hub — B.Tech Results & Analytics',
    description: 'Check BU Jhansi B.Tech results, SGPA leaderboard & student performance analytics.',
  },
  alternates: {
    canonical: 'https://bu-btech-resulthub.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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
