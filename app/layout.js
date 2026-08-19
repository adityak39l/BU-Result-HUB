import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ResultHub BU Jhansi — B.Tech Results, Leaderboards & Analytics',
  description: 'The #1 student-built academic platform for Bundelkhand University (BU Jhansi) B.Tech department. Check results, SGPA leaderboards, subject difficulty & compare students across all B.Tech branches.',
  keywords: 'BU Jhansi results, Bundelkhand University BTech results, BU Jhansi SGPA, BU Jhansi leaderboard, IET BU Jhansi, BU Jhansi result hub',
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
